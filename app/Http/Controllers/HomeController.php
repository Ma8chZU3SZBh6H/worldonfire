<?php

namespace App\Http\Controllers;

use App\Helpers\ArticleHelper;
use App\Helpers\NewsApi;
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
     * @return \Inertia\Response
     */
    public function index()
    {
        $newsApi = new NewsApi('homenews');
        $fav = User::find(Auth::id())->Articles()->get();

        return Inertia::render('Home', [
            'news' => $newsApi->news,
            'favs' => $fav
        ]);
    }

    /**
     * Show favorites
     *
     * @return \Inertia\Response
     */
    public function show()
    {
        $favs = User::find(Auth::id())->Articles()->orderBy("published_at", "desc")->get();
        $news = ArticleHelper::remap($favs->toArray());
        return Inertia::render('Home', [
            'news' => $news,
            'favs' => $favs
        ]);
    }
}
