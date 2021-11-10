<?php

namespace App\Helpers;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Cache;

class NewsApi
{
    public $news = null;

    public function __construct()
    {
        if (Cache::has('homenews')) {
            $this->news = Cache::get('homenews');
        } else {
            $this->get_news();
            Cache::add("homenews", $this->news, 60 * 60 * 12);
        }
    }
    public function get_news()
    {
        $httpClient = new Client();
        $response = $httpClient->get("https://newsapi.org/v2/top-headlines?country=us&apiKey=b40f6c9be16a4b64b6b16d9523c688f0");
        $this->news = json_decode($response->getBody()->getContents())->articles;
        error_log("BORKEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
    }
}
