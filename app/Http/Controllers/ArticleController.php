<?php

namespace App\Http\Controllers;

use App\Helpers\NewsApi;
use App\Models\Article;
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

    public function store(Request $request)
    {
        $request->validate([
            'source_id' => ['max:255'],
            'source_name' => ['required', 'max:255'],
            'author' => ['max:255'],
            'title' => ['required', 'max:255'],
            'description' => ['required', 'max:255'],
            'url' => ['required', 'max:255'],
            'url_img' => ['required', 'max:255'],
            'published_at' => ['required', 'max:255'],
            'content' => ['max:255']
        ]);

        $findIfExistsAlready = count(Article::where([
            ["title", $request->title],
            ["user_id", Auth::user()->id]
        ])->get()->toArray());

        if ($findIfExistsAlready == 0) {
            Article::create([
                'user_id' => Auth::user()->id,
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
        }

        return Redirect::back();
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'title' => ['required', 'max:255']
        ]);
        $article = Article::where([
            ['title', '=', $request->title],
            ['user_id', '=', Auth::user()->id]
        ]);
        $article->delete();

        return Redirect::back();
    }
}
