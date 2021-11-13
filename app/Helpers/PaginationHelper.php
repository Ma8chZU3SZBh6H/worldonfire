<?php

namespace App\Helpers;

class PaginationHelper
{
    private $show;
    private $max;
    private $data;
    private $offset_start;
    private $offset_end;

    public $page;

    public function __construct($data, $show = 10)
    {
        $this->show = $show;
        $this->data = $data;
        $this->max = count($data);
    }


    /**
     * Will slice the data depending on the page
     *
     * @param int $page
     */
    public function page($page)
    {
        $this->page_clmap($page);
        $this->page = array_slice($this->data, $this->offset_start, $this->offset_end);
    }


    /**
     * returns information about the current page, for client side
     *
     * @param int $page
     * @param string $route
     * @param array $route_params
     * @return array
     */
    public function page_data($page, $route = null, $route_params = null)
    {
        $page_count_fraction = $this->max % $this->show;
        $page_count = ($this->max - $page_count_fraction) / $this->show;
        $path = '/';
        if ($route) {
            $path = route($route, $route_params);
        }

        return [
            'page' => $page,
            'show' => $this->show,
            'max' => $this->show,
            'page_count' => $page_count,
            'path' => $path
        ];
    }

    private function page_clmap($page)
    {
        $this->offset_start = max(0, min($this->max - $this->show, 10 * $page));
        $this->offset_end = max(10, min($this->max, (10 * $page) + $this->show));
    }
}
