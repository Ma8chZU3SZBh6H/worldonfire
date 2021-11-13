<?php

use App\Helpers\NewsApi;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Models\Article;
use App\Models\Favorite;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/test', function () {
    return Article::all();
});

Route::get('/test2', function () {
    return Favorite::all();
});

Route::get('/test3', function () {
    $news = new NewsApi('search', 'bitcoin');
    dd($news->news);
    return Favorite::all();
});

Route::get('/search/{title}/{page?}', [HomeController::class, 'search'])->name('search');
Route::get('/favorites/{page?}', [HomeController::class, 'show'])->name('favorites');


Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'store']);
Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');

Route::get('/register', [RegisterController::class, 'index'])->name('register');
Route::post('/register', [RegisterController::class, 'store']);

Route::post('/article/create', [ArticleController::class, 'create'])->name('article.create');
Route::get('/article/{source}/{title}', [ArticleController::class, 'index'])->name('article');
Route::post('/article/favorite', [ArticleController::class, 'store'])->name('article.favorite');
Route::post('/article/unfavorite', [ArticleController::class, 'destroy'])->name('article.unfavorite');

Route::get('/{page?}', [HomeController::class, 'index'])->name('home');
