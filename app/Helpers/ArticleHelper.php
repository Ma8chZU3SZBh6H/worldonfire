<?php

namespace App\Helpers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleHelper
{
    /**
     * Creates article in database of doesn't exist
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \App\Models\Article
     */
    public static function create(Request $request)
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
            return $article;
        } else {
            return $findIfExistsAlready;
        }
    }

    /**
     * Remaps Article data structure from dabase friendly, to original.
     *
     * @param  array  $articles
     * @return array
     */
    public static function remap($articles)
    {
        return array_map(function ($article) {
            return [
                'source' => [
                    'id' => $article['source_id'],
                    'name' =>  $article['source_name'],
                ],
                'author' => $article['author'],
                'title' => $article['title'],
                'description' => $article['description'],
                'url' => $article['url'],
                'urlToImage' => $article['url_img'],
                'publishedAt' => $article['published_at'],
                'content' => $article['content'],
            ];
        }, $articles);
    }
}
