import React, { useState } from 'react'
import '../../../App.css'
import { MarkerClusterer as MarkerClustered } from '@googlemaps/markerclusterer'
import { Loader } from '@googlemaps/js-api-loader'
import { brandLogo, smallBrandHero } from '../../NewHomes/assets'
import ReactDOMServer from 'react-dom/server';
import { Card, CardContent } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Maps(props) {
  const navigate = useNavigate()

  const [location, setLocation] = useState([
    { lat: -7.942, lng: 112.951, data: { id: 1, name: 'Hotel 1', description: 'Duis nostrud reprehenderit exercitation consequat commodo aute aliqua ullamco tempor.' } },
    { lat: -7.751, lng: 113.202, data: { id: 2, name: 'Hotel 2', description: 'Duis nostrud reprehenderit exercitation consequat commodo aute aliqua ullamco tempor.' } },
    { lat: -7.756, lng: 113.209, data: { id: 3, name: 'Hotel 3', description: 'Duis nostrud reprehenderit exercitation consequat commodo aute aliqua ullamco tempor.' } },
    { lat: -7.734, lng: 113.175, data: { id: 4, name: 'Hotel 4', description: 'Duis nostrud reprehenderit exercitation consequat commodo aute aliqua ullamco tempor.' } },
    { lat: -7.679, lng: 113.248, data: { id: 5, name: 'Hotel 5', description: 'Duis nostrud reprehenderit exercitation consequat commodo aute aliqua ullamco tempor.' } },
    { lat: -6.2329181, lng: 106.9898949, data: { id: 6, name: 'Hotel 6', description: 'Duis nostrud reprehenderit exercitation consequat commodo aute aliqua ullamco tempor.' } }
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


    // Add some markers to the map.
    const markers = location.map((dataMap, i) => {
      const pointerLocation = document.createElement('div')
      pointerLocation.style.width = '20px'
      pointerLocation.style.height = '20px'
      pointerLocation.style.borderRadius = '50%'
      pointerLocation.style.border = '1px solid white'
      pointerLocation.style.backgroundColor = '#17C2ED'

      const marker = new google.maps.marker.AdvancedMarkerElement({
        position: { lat: dataMap.lat, lng: dataMap.lng },
        content: pointerLocation,
      });
      const handleClickMarkerShowElement = (dataMap) => {
        const { data } = dataMap;
        let infoWindow = new window.google.maps.InfoWindow({
          disableAutoPan: false,
          content: ReactDOMServer.renderToString(
            <div key={data?.id} className='m-0 px-0' style={{ position: 'relative', }}>
              <div style={{ width: '270px', height: '300px', border: '1px solid #eaeaea' }}>
                <div style={{ backgroundColor: '#F68B1F', height: '30px', width: '100%', position: 'relative' }}>
                  <div style={{ backgroundImage: `url(${brandLogo})`, backgroundRepeat: `no-repeat`, backgroundSize: 'cover', width: `116px`, height: `22px`, position: `absolute`, top: 0, left: 0 }}></div>
                </div>
                <div style={{ backgroundImage: `url(${smallBrandHero})`, backgroundRepeat: `no-repeat`, backgroundSize: 'cover', width: '100%', height: '150px' }}></div>
                <div className="content" style={{ marginLeft: '10px', marginTop: '10px' }}>
                  <p className='font-sz-14px fw-bold'>{data?.name}</p>
                  <div >{data?.description}</div>
                </div>
                <div className="d-flex mx-1 justify-content-between my-3" >
                  <div className='bg-info' style={{ backgroundColor: '#F68B1F', height: 20, width: 97, position: 'relative' }} >
                    <div style={{ backgroundImage: `url(${brandLogo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 20, width: 97, position: 'absolute', top: 0, left: 0 }}></div>
                  </div>
                </div>
              </div>
            </div>
          ),
        });
        infoWindow.open(map, marker);
      }
      marker.addListener("click", () => handleClickMarkerShowElement(dataMap));
      return marker;
    });

    // Add a marker clusterer to manage the markers.
    new MarkerClustered({ markers, map });
  });

  return (
    <div style={{ marginTop: '50px', width: '100%', height: '400px' }}>
      <div id="map" style={{ height: '100%' }}></div>
    </div>
  );
}

