<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Favorite extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'article_id'
    ];

    public function Article()
    {
        return $this->hasOne(Article::class);
    }
}
