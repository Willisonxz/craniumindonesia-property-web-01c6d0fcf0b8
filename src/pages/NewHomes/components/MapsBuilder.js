import React, { useState } from 'react'
import '../../../App.css'
import { MarkerClusterer } from '@googlemaps/markerclusterer'
import { brandLogo, smallBrandHero } from '../assets'
import { Loader } from '@googlemaps/js-api-loader'
import { Place } from '@mui/icons-material'


export default function Maps(props) {
  const [ location, setLocation ] = useState([
    { lat: -7.942, lng: 112.951 },
    { lat: -7.751, lng: 113.202 },
    { lat: -7.756, lng: 113.209 },
    { lat: -7.734, lng: 113.175 },
    { lat: -7.679, lng: 113.248 },
    { lat: -6.2329181, lng: 106.9898949 }
  ])

  const redirectToDetail = () => {
    window.location.href = "/new-homes"
  }

  const loader = new Loader({
    apiKey: 'AIzaSyCrGHuKbAqbGPumgKuzlqMtYBAVb4O0xCQ',
    version: 'weekly'
  })

  loader.load().then(async () => {
    const google = window.google;
    // Request needed libraries.
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
      "marker",
    );
    
    const map = new google.maps.Map(document.getElementById("map-builder"), {
      zoom: 10,
      center: { lat: location[0].lat, lng: location[0].lng },
      mapId: "e7f00e4f77c30c63",
    });
    const infoWindow = new google.maps.InfoWindow({
      disableAutoPan: false,
    });

    // Add some markers to the map.
    const markers = location.map((position, i) => {
      const pointerLocation = document.createElement('div')
      pointerLocation.style.width = '20px'
      pointerLocation.style.height = '20px'
      pointerLocation.style.borderRadius = '50%'
      pointerLocation.style.border = '1px solid white'
      pointerLocation.style.backgroundColor = '#17C2ED'

      const marker = new google.maps.marker.AdvancedMarkerElement({
        position,
        content: pointerLocation,
      });

      // markers can only be keyboard focusable when they have click listeners
      // open info window when marker is clicked

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
      return marker;
    });

    // Add a marker clusterer to manage the markers.
    new MarkerClusterer({ markers, map });
  });

  return (
    <div style={{ marginTop: '50px', width: '100%', height: '400px' }}>
      <div id="map-builder" style={{ height: '100%' }}></div>
    </div>
  );
}

