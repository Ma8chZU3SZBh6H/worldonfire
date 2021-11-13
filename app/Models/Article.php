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
    ];

    public static function Favorite($title, $source_name)
    {
        $article = Article::where([
            ["title", $title],
            ["source_name", $source_name]
        ])->first();
        if ($article) {
            return Favorite::where([
                ["user_id", Auth::id()],
                ["article_id", $article->id]
            ]);
        } else {
            return null;
        }
    }
}
