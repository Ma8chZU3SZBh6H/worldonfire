<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'source_id',
        'source_name',
        'author',
        'title',
        'description',
        'url',
        'url_img',
        'published_at',
        'content',
        'user_id'
    ];

    public static function favs()
    {
        if (Auth::user()) {
            $articles = Article::where("user_id", "=", Auth::user()->id)->get()->toArray();
            //dd($articles);
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
        } else {
            return null;
        }
    }
}
