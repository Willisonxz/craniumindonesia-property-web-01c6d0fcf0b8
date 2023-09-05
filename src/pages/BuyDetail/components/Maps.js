import React, { useState } from 'react'
import '../../../App.css'
import { MarkerClusterer } from '@googlemaps/markerclusterer'
import { brandLogo, smallBrandHero } from '../assets'
import { Loader } from '@googlemaps/js-api-loader'


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
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: { lat: location[0].lat, lng: location[0].lng },
      mapId: "e7f00e4f77c30c63",
    });
    const infoWindow = new google.maps.InfoWindow({
      disableAutoPan: false,
      content: `
      <div style="width: 270px; height: 300px; border: 1px solid #eaeaea;">
        <div style="background-color: #F68B1F; height: 30px; width: 100%; position: relative;">
          <div style="background-image: url(${brandLogo}); background-repeat: no-repeat; background-size: cover; width: 116px; height: 22px; position: absolute; top: 0; left: 0;"></div>
        </div>
        <div style="background-image: url(${smallBrandHero}); background-repeat: no-repeat; background-size: cover; width: 100%; height: 150px;"></div>
        <div class="content" style="margin-left: 10px; margin-top: 10px">
          <p style="font-size: 14px; font-weight: 600; font-family: Arial, Helvetica, sans-serif;">The burbank</p>
          <p style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; margin-top: -10px;">181 Waymouth Street, Adelaide, SA 5000</p>
        </div>
        <div class="footer" style="margin-left: 10px; display: flex; justify-content: space-between; margin-top: 30px;">
          <div style="background-color: #F68B1F; height: 20px; width: 97px; position: relative;">
            <div style="background-image: url(${brandLogo}); background-repeat: no-repeat; background-size: cover; width: 97px; height: 18px; position: absolute; top: 0; left: 0;"></div>
          </div>
        </div>
      </div>
      `
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
    <div style={{ marginTop: '50px', width: '100%', height: '80vh', position: 'absolute', top: 130 }}>
      <div id="map" style={{ height: '100%' }}></div>
    </div>
  );
}

