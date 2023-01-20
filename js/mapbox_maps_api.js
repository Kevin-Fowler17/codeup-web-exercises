"use strict"

let restaurants = [
{
    name: "Brickstreet of Grand Blanc",
    description: "With a great pub atmospehere, we feature several dining rooms for your enjoyment.",
    longitude: [-83.68304],
    latitude: [42.91564],
    review: "It has a great atmosphere with a nice big fireplace to eat at during the winter. The staff is friendly and the menu has a great variety"
},
{
    name: "Jimmy Buffett's Margaritaville Cozumel",
    description: "The Lower The Latitude, The Better The Attitude",
    longitude: [-86.97557],
    latitude: [20.47534],
    review: "My wife and I ate hear on our anniversary, got drunk and walked back to our cruise ship. The harbor doesn't look so far when you're drunk."
},
{
    name: "big'z burger joint",
    description: "big'z burger joint is a family-friendly restaurant with the best burgers in san antonio!",
    longitude: [-98.52907],
    latitude: [29.60702],
    review: "Best burgers in San Antonio. Also, they have A LOT of different dipping sauces for your fries."
}
];

let zoomSection = document.getElementById("zoom");
zoomSection.addEventListener('change', updateMap);

function updateMap () {

    mapboxgl.accessToken = MAPBOX_API_KEY;
    const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    zoom: zoomSection.value,
    center: [-98.52907, 29.60702]
    });

    restaurants.forEach(function (restaurant) {

    let marker = new mapboxgl.Marker()
    .setLngLat([restaurant.longitude, restaurant.latitude])
    .addTo(map);
    let restaurantPopup = new mapboxgl.Popup()
    .setHTML(`<h2>${restaurant.name}</h2><p style="color: blue">${restaurant.description}</p><P style="color: red">${restaurant.review}</P>`)
    marker.setPopup(restaurantPopup)

    })
}

updateMap();


