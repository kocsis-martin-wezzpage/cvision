$(document).ready(function() {
    if ($(document).scrollTop() > 0) {
        if (!$('.menu').hasClass('background')) {
            $('.menu').addClass('background');
        }
    } else {
        $('.menu').removeClass('background');
    }
    $(window).on( 'scroll', function(){
        if ($(document).scrollTop() > 0) {
            if (!$('.menu').hasClass('background')) {
                $('.menu').addClass('background');
            }
        } else {
            $('.menu').removeClass('background');
        }
    });
});

function initMap() {
    var cvision = {lat: 47.437934, lng: 19.105097};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: cvision,
        styles: [
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#e0efef"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "hue": "#1900ff"
                    },
                    {
                        "color": "#c0e8e8"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": 700
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#4c9295"
                    }
                ]
            }
        ]
    });
    var marker = new google.maps.Marker({
        position: cvision,
        map: map
    });
}
