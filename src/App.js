import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import MapContainer from "./MapContainer";

const App = () => {
  // const addMarkers = links => map => {
  //   links.forEach((link, index) => {
  //     const marker = new window.google.maps.Marker({
  //       map,
  //       position: link.coords,
  //       label: `${index + 1}`,
  //       title: link.title
  //     });
  //     marker.addListener("click", () => {
  //       window.location.href = link.url;
  //     });
  //   });
  // };

  // const testProps = {
  //   onMount: addMarkers([
  //     {
  //       coords: {
  //         lat: 47.26386,
  //         lng: -122.44873
  //       },
  //       title: "Stadium Thriftway"
  //     }
  //   ])
  // };

  return (
    <>
      <div>Cycle There!</div>
      <div>
        <MapContainer></MapContainer>
      </div>
    </>
  );
};

render(<App />, document.getElementById("root"));
