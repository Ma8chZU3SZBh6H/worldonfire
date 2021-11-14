<?php

namespace App\Http\Controllers;

use App\Helpers\ArticleHelper;
use App\Helpers\NewsApi;
use App\Helpers\PaginationHelper;
use App\Models\Article;
use App\Models\Favorite;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->only('show');
    }

    /**
     * Shows homepage
     *
     * @param int $page
     * @return \Inertia\Response
     */
    public function index($page = 0)
    {
        $newsApi = new NewsApi('homenews');
        $pages = new PaginationHelper($newsApi->news);
        $pages->page($page);

        $fav = null;
        if (Auth::check()) {
            $fav = User::find(Auth::id())->Articles()->get();
        }

        return Inertia::render('Home', [
            'news' => $pages->page,
            'favs' => $fav,
            'page' => $pages->page_data($page, "home")
        ]);
    }

    /**
     * Show favorites
     *
     * @param int $page
     * @return \Inertia\Response
     */
    public function show($page = 0)
    {
        $favs = null;
        if (Auth::check()) {
            $favs = User::find(Auth::id())->Articles()->orderBy("published_at", "desc")->get();
        }

        $news = ArticleHelper::remap($favs->toArray());
        $pages = new PaginationHelper($news);
        $pages->page($page);

        return Inertia::render('Home', [
            'news' => $pages->page,
            'favs' => $favs,
            'page' => $pages->page_data($page, "favorites")
        ]);
    }


    /**
     * Show search results
     *
     * @param string $title
     * @param int $page
     * @return \Inertia\Response
     */
    public function search($title, $page = 0)
    {
        $newsApi = new NewsApi('search', $title);
        $pages = new PaginationHelper($newsApi->news);
        $pages->page($page);

        $favs = null;
        if (Auth::check()) {
            $favs = User::find(Auth::id())->Articles()->get();
        }

        return Inertia::render('Home', [
            'news' => $pages->page,
            'favs' => $favs,
            'page' => $pages->page_data($page, "search", [$title])
        ]);
    }
}
