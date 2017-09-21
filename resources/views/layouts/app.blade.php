<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">

    <title>{{Lang::get('homepage.homepage_title')}}</title>
    <meta name="description" content="C-vision">
    <meta name="author" content="C-vision">

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/helper.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="Assets/font-awesome/css/font-awesome.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAqpD9kuDc9NCB3NwK4qQX_xIEb7BC23gw&callback=initMap">
    </script>

    <script src="/js/app.js" ></script>
</head>

<body>

@include('menu')
<div id="content">
    @yield('content')
</div>

</body>
</html>