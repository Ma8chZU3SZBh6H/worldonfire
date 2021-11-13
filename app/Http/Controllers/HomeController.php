<?php

namespace App\Http\Controllers;

use App\Helpers\NewsApi;
use App\Models\Article;
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
        $favorites = Article::favs();

        return Inertia::render('Home', [
            'news' => $newsApi->news,
            'favs' => $favorites
        ]);
    }

    /**
     * Show favorites
     *
     * @return \Inertia\Response
     */
    public function show()
    {
        $favorites = Article::favs();
        return Inertia::render('Home', [
            'news' => $favorites
        ]);
    }
}
