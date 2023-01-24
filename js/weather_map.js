"use strict"
function startingWeatherAndMap () {

// weather
    const weatherData = '';

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPENWEATHER_API_KEY,
        lat:    29.63638,
        lon:   -98.40349,
        units: "imperial"
    }).done(function(data) {

    document.getElementById("currentCity").innerHTML = 'Current city: ' + data.city.name;

    document.getElementById("tip1").innerHTML = renderWeatherTip(data, 0);
    document.getElementById("tip2").innerHTML = renderWeatherTip(data, 8);
    document.getElementById("tip3").innerHTML = renderWeatherTip(data,16);
    document.getElementById("tip4").innerHTML = renderWeatherTip(data,24);
    document.getElementById("tip5").innerHTML = renderWeatherTip(data,32);

    document.getElementById("card1").innerHTML = renderWeather(data, 0);
    document.getElementById("card2").innerHTML = renderWeather(data, 8);
    document.getElementById("card3").innerHTML = renderWeather(data,16);
    document.getElementById("card4").innerHTML = renderWeather(data,24);
    document.getElementById("card5").innerHTML = renderWeather(data,32);
    });

//mapbox
    mapboxgl.accessToken = MAPBOX_API_KEY;
    const map = new mapboxgl.Map({
        container: 'my-map',
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        zoom: 18,
        center: [-98.40349, 29.63638]
    });

    let marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.40349, 29.63638])
        .addTo(map);

    let popup = new mapboxgl.Popup()
        .setHTML(`<br>San Antonio, TX`)
    marker.setPopup(popup)

}

startingWeatherAndMap();

function updateWeatherAndLocation () {
    console.log(addAddressSelection.value)

    geocode(addAddressSelection.value, MAPBOX_API_KEY).then(function(results) {

        console.log(results)

        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPENWEATHER_API_KEY,
            lat:   results[1],
            lon:   results[0],
            units: "imperial"
        }).done(function(data) {
            console.log(data);

            document.getElementById("currentCity").innerHTML = 'Curreny city: ' + data.city.name;

            document.getElementById("tip1").innerHTML = renderWeatherTip(data, 0);
            document.getElementById("tip2").innerHTML = renderWeatherTip(data, 8);
            document.getElementById("tip3").innerHTML = renderWeatherTip(data,16);
            document.getElementById("tip4").innerHTML = renderWeatherTip(data,24);
            document.getElementById("tip5").innerHTML = renderWeatherTip(data,32);

            document.getElementById("card1").innerHTML = renderWeather(data, 0);
            document.getElementById("card2").innerHTML = renderWeather(data, 8);
            document.getElementById("card3").innerHTML = renderWeather(data,16);
            document.getElementById("card4").innerHTML = renderWeather(data,24);
            document.getElementById("card5").innerHTML = renderWeather(data,32);
        });

        mapboxgl.accessToken = MAPBOX_API_KEY;
        const map = new mapboxgl.Map({
            container: 'my-map',
            style: 'mapbox://styles/mapbox/satellite-streets-v12',
            zoom: 10,
            center: [results[0], results[1]]
        });

        let marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([results[0], results[1]])
            .addTo(map);

        function onDragEnd() {
            const lngLat = marker.getLngLat();
            coordinates.style.display = 'block';
            coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
        }

        marker.on('dragend', onDragEnd)

        let popup = new mapboxgl.Popup()
            .setHTML(`<br>${addAddressSelection.value}`)
        marker.setPopup(popup)
    })
}

function renderWeatherTip(data, increment) {

    console.log("test")
    let html = '<ul>';
    html += '<li>Feels Like: ' + Math.round(data.list[increment].main.feels_like) + String.fromCharCode(176) + 'F</li>';
    html += '<li>Humidity: ' + Math.round(data.list[increment].main.humidity) + '%</li>';
    html += '<li>Cloud Coverage: ' + Math.round(data.list[increment].clouds) + '%</li>';
    html += '<li>Wind Speed: ' + Math.round(data.list[increment].wind.speed) + '%</li>';
    html += '</ul>';
    html += '</span>';

    return html;
}

function renderWeather(data, increment) {
    console.log("test 2")
    let formattedDate = new Date((data.list[increment].dt * 1000))

    let html = '<div class="mx-auto card-header">' + formattedDate.toDateString() + '</div>';
    html += '<ul class="list-group list-group-flush">';
    html += '<li class="list-group-item"><img src="http://openweathermap.org/img/wn/' + data.list[increment].weather[0].icon + '@2x.png" style="width: 50px;"/></li>';
    html += '<li class="list-group-item">' + Math.round(data.list[increment].main.temp) + String.fromCharCode(176) + 'F ' + data.list[increment].weather[0].main + '</li>';
    html += '<li class="list-group-item">H: ' + Math.round(data.list[increment].main.temp_max) + String.fromCharCode(176) + 'F / L:' + Math.round(data.list[0].main.temp_min) + String.fromCharCode(176) + 'F</li><br>';
    html += '</ul>';

    return html;
};

const addAddressSelection = document.querySelector('#addAddress');
let submitAddress = document.getElementById("submitAddress");

submitAddress.addEventListener('click', updateWeatherAndLocation);

