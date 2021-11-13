<?php

namespace App\Http\Controllers;

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
        $this->middleware('auth');
    }

    /**
     * Handles favorite request
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'source_id' => ['max:10000'],
            'source_name' => ['required', 'max:10000'],
            'author' => ['max:10000'],
            'title' => ['required', 'max:10000'],
            'description' => ['required', 'max:10000'],
            'url' => ['required', 'max:10000'],
            'url_img' => ['required', 'max:10000'],
            'published_at' => ['required', 'max:10000'],
            'content' => ['max:10000']
        ]);

        $findIfExistsAlready = Article::where([
            ["title", $request->title],
            ["source_name", $request->source_name]
        ])->first();

        if ($findIfExistsAlready == null) {
            $article = Article::create([
                'source_id' => $request->source_id,
                'source_name' => $request->source_name,
                'author' => $request->author,
                'title' => $request->title,
                'description' => $request->description,
                'url' => $request->url,
                'url_img' => $request->url_img,
                'published_at' => $request->published_at,
                'content' => $request->content,
            ]);

            $found_article = User::find(Auth::id())->Favorites()->where("article_id", $article->id)->first();
            if ($found_article == null) {
                Favorite::create([
                    'user_id' => Auth::user()->id,
                    'article_id' => $article->id
                ]);
            }
        } else {

            $found_article = User::find(Auth::id())->Favorites()->where("article_id", $findIfExistsAlready->id)->first();
            if ($found_article == null) {
                Favorite::create([
                    'user_id' => Auth::user()->id,
                    'article_id' => $findIfExistsAlready->id
                ]);
            }
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
