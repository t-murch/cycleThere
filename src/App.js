import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import MapContainer from "./MapContainer";

const App = () => {
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
