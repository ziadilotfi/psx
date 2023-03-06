<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', "" ) }}</title>

        {!! \App\Http\Services\PsService::render() !!}

        @routes

        {{ meta_tags() }}

        {{ vite_assets() }}
    </head>
    <body class="font-sans antialiased">
        @inertia

        @env ('local')
            <!-- <script src="http://localhost:3000/browser-sync/browser-sync-client.js"></script> -->
        @endenv
    </body>
</html>
