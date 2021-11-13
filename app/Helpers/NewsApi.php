<?php

namespace App\Helpers;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Cache;

class NewsApi
{
    public $news = null;
    private $url = null;
    private $api_key = "b40f6c9be16a4b64b6b16d9523c688f0";
    private $api_q = null;

    public function __construct($type, $q = null)
    {
        $this->api_q = $q;
        $this->generate_url($type);
        if ($q == null) {
            $this->check_cache($type);
        } else {
            $name = preg_replace("/[^A-Z,^a-z]/i", "_", $q);
            //dd($name);
            $this->check_cache($name);
        }
    }


    /**
     * Checks if data of api request is stored in cache
     *
     * @param  string
     */
    public function check_cache($type)
    {
        if (Cache::has($type)) {
            $this->news = Cache::get($type);
        } else {
            $this->get_news();
            Cache::add($type, $this->news, 60 * 60 * 12);
        }
    }

    /**
     * Gets data from api
     *
     */
    public function get_news()
    {
        $httpClient = new Client();
        $response = $httpClient->get($this->url);
        dd($response->getBody()->getContents());
        $this->news = json_decode($response->getBody()->getContents())->articles;
    }

    /**
     * Generates api request url
     *
     * @param  string
     */
    public function generate_url($type)
    {
        switch ($type) {
            case 'one':
                $this->url = "https://newsapi.org/v2/top-headlines?country=us&apiKey={$this->api_key}&q={$this->api_q}";
                break;
            case 'homenews':
                $this->url = "https://newsapi.org/v2/top-headlines?country=us&apiKey={$this->api_key}";
                break;
            default:
                $this->url = "https://newsapi.org/v2/top-headlines?country=us&apiKey={$this->api_key}";
                break;
        }
    }
}
