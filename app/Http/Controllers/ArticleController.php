<?php

namespace App\Http\Controllers;

use App\Helpers\ArticleHelper;
use App\Helpers\NewsApi;
use App\Models\Article;
use App\Models\Favorite;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->only(['create', 'store', 'destroy']);
    }

    public function index($source, $title)
    {
        $article = ArticleHelper::remap(Article::where([
            ['source_name', $source],
            ['title', $title]
        ])->get()->toArray());
        $fav = User::find(Auth::id())->Articles()->get();

        return Inertia::render('Article', [
            'news' => $article,
            'favs' => $fav
        ]);
    }

    public function create(Request $request)
    {
        $article = ArticleHelper::create($request);

        return Redirect::route('article', [$article->source_name, $article->title]);
    }

    /**
     * Handles favorite request
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $article = ArticleHelper::create($request);
        $found_article = User::find(Auth::id())->Favorites()->where("article_id", $article->id)->first();
        if ($found_article == null) {
            Favorite::create([
                'user_id' => Auth::user()->id,
                'article_id' => $article->id
            ]);
        }

        return Redirect::back();
    }

    /**
     * Handles unfavorite request
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        $request->validate([
            'title' => ['required', 'max:1000'],
            'source_name' => ['required', 'max:1000']
        ]);
        Article::Favorite($request->title, $request->source_name)->delete();

        return Redirect::back();
    }
}
