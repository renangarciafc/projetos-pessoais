window.onload = function() {
    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-25.393680, -49.179740),
            scrollwheel: false,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById("mapa"), mapProp);
    }

    function addMarker(lat, long, icon, content, click) {
        var LatLng = {'lat': lat, 'lng': long};

        var marker = new google.maps.Marker({
            position: LatLng,
            map: map,
            icon: icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0, 20)
        });

        if (click == true){
        google.maps.event.addListener(marker, 'click',function(){
            infoWindow.open(map, marker);
        });
        }
        else if(click == false){
            infoWindow.open(map, marker);
        }
    }

    initialize();

    var conteudo = '<p style="color:black;font-size:13px;padding 7px 3px;">Meu endereço</p>';
    addMarker(-25.393680, -49.179740, '', conteudo, true);

    map.panTo({'lat':-25.393680,'lng':-49.179740})
}