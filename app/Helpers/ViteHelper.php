<?php

use Illuminate\Support\HtmlString;

if (! function_exists('vite_assets')) {
    /**
     * @return HtmlString
     * @throws Exception
     */
    function vite_assets(): HtmlString
    {
        // $devServerIsRunning = false;

        // if (app()->environment('local')) {
        //     try {
        //         $devServerIsRunning = file_get_contents(public_path('hot')) == 'dev';
        //     } catch (Exception $e) {}
        // }

        // if ($devServerIsRunning) {

        if (app()->environment('local')) {
            return new HtmlString(<<<HTML
            <script type="module" src="http://localhost:3000/@vite/client"></script>
            <script type="module" src="http://localhost:3000/resources/js/app.js"></script>
        HTML);
        }
        $manifest = json_decode(file_get_contents(
            public_path('build/manifest.json')
        ), true);
        
        $subDir = "";
        if(config('app.dir') != null && config('app.dir') != '') {
            $subDir = "/" . config('app.dir');
        }
        return new HtmlString(<<<HTML
        <script type="module" src="{$subDir}/build/{$manifest['resources/js/app.js']['file']}"></script>
        <link rel="stylesheet" href="{$subDir}/build/{$manifest['resources/js/app.js']['css'][0]}">
    HTML);
    }

    function getName($link) {
        $dir = config('app.dir');
        if($dir != "") {
            $link = str_replace("/".$dir,"",$link);
        }
        $link = substr($link,1);

        $list = explode("/", $link);

        $list2 = explode("?", $list[0]);

        return ucfirst($list2[0]);
    }

    function meta_tags(): HtmlString
    {

        // echo $name; die;
        $actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

        $path ="$_SERVER[REQUEST_URI]";
        $name = getName($path);

        return new HtmlString(<<<HTML
            <!-- <meta itemprop="name" content="{$name}" inertia="name">
            <meta itemprop="description" content="{$actual_link}" inertia="description"> -->
            <meta itemprop="image" name="image" content="http://products.panacea-soft.co/psx-mpc-demo/public/storage/PSX_MPC/uploads/mpc-fbs.png" inertia="image" />

            <!-- <meta itemprop="image" content="https://www.panacea-soft.com/flutter-buysell-fe/img/chart.413aeac6.jpeg">  -->

            <!-- <meta inertia="g-name" itemprop="name" content="{$name}" />
            <meta inertia="g-description" itemprop="description" content="{$actual_link}" /> -->
            <meta inertia="g-image" itemprop="image" content="http://products.panacea-soft.co/psx-mpc-demo/public/storage/PSX_MPC/uploads/mpc-fbs.png" />

            <!-- Facebook Meta Tags -->
            <!-- <meta property="og:url" content="{$actual_link}" inertia="o-url">
            <meta property="og:type" content="website" inertia="o-type">
            <meta property="og:title" content="{$name}" inertia="o-title">
            <meta property="og:description" content="{$actual_link}" inertia="o-description"> -->
            <meta property="og:image" inertia="o-image" content="http://products.panacea-soft.co/psx-mpc-demo/public/storage/PSX_MPC/uploads/mpc-fbs.png">

            <!-- Twitter Meta Tags -->
            <!-- <meta inertia="t-card" name="twitter:card" content="summary_large_image">
            <meta inertia="t-title" name="twitter:title" content="{$name}"> -->
            <!-- <meta inertia="t-description" name="twitter:description" content="{$actual_link}"> -->
        HTML);
    }
}
