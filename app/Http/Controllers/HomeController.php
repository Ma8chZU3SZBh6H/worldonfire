<?php

namespace App\Http\Controllers;

use App\Helpers\NewsApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $newsApi = new NewsApi();

        return Inertia::render('Home', [
            'news' => $newsApi->news
        ]);
    }
}
