<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

        <!-- Styles -->
        <style>

        </style>
    </head>
    <body>
        @if (Route::has('welcome'))
            Welcome
        @endif
        @if (Route::has('login'))
            <div class="top-right links">
                @auth
                    <a href="{{ url('/home') }}">Home</a>
                @else
                    <a href="{{ route('login') }}">Login</a>

                    @if (Route::has('register'))
                        <a href="{{ route('register') }}">Register</a>
                    @endif
                @endauth
            </div>
        @endif

        <div id="app" v-cloak class="container mx-10">
            <contact></contact>
        </div>
        <!-- app -->
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
