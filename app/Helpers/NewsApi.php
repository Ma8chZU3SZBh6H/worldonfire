<?php

namespace App\Helpers;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Cache;

class NewsApi
{
    public $news = null;
    private $url = null;
    private $api_key = null;
    private $api_q = null;

    public function __construct($type, $q = null)
    {
        $this->api_key = env("API_KEY");
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
    private function check_cache($type)
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
    private function get_news()
    {
        $httpClient = new Client();
        $response = $httpClient->get($this->url);
        //dd($response->getBody()->getContents());
        $this->news = json_decode($response->getBody()->getContents())->articles;
    }

    /**
     * Generates api request url
     *
     * @param  string
     */
    private function generate_url($type)
    {
        switch ($type) {
            case 'search':
                $this->url = "https://newsapi.org/v2/everything?apiKey={$this->api_key}&q={$this->api_q}";
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
