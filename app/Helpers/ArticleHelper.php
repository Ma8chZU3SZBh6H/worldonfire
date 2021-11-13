<?php

namespace App\Helpers;

class ArticleHelper
{
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
