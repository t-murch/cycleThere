import React, { useEffect, useRef } from "react";
import Map from "./Map";

function MapContainer() {
  const addMarkers = links => map => {
    links.forEach((link, index) => {
      const marker = new window.google.maps.Marker({
        map,
        position: link.coords,
        label: `${index + 1}`,
        title: link.title
      });
      marker.addListener("click", () => {
        window.location.href = link.url;
      });
    });
  };
  const testLocation = {
    coords: {
      lat: 47.26386,
      lng: -122.44873
    },
    title: "Stadium Thriftway"
  };

  const testProps = {
    onMount: addMarkers([testLocation])
  };

  return <Map {...testProps}></Map>;
}

export default MapContainer;
