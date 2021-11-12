<?php

namespace App\Http\Controllers;

use App\Helpers\NewsApi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function show($title)
    {
        $newsApi = new NewsApi('one', $title);
        return Inertia::render('Article', [
            'news' => $newsApi->news
        ]);
    }
}
