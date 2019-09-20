import React, { useEffect, createRef } from "react";
import { render } from "react-dom";

const MapComp = () => {
  const mapVar = process.env.MAP_KEY;
  const mapAPI = `https://maps.googleapis.com/maps/api/js?key=${mapVar}&libraries=places`;
  const googleMapRef = createRef();

  useEffect(() => {
    const googleMapScript = document.createElement("script");

    googleMapScript.src = mapAPI;

    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      this.googleMap = createGoogleMap();
    });
  });

  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current, {
      zoom: 10,
      center: {
        lat: 47.266171,
        lng: -122.448257
      },
      disableDefaultUI: true
    });

  return (
    <div
      id="google-map"
      ref={googleMapRef}
      style={{ width: "400px", height: "300px" }}
    />
  );
};

export default MapComp;
