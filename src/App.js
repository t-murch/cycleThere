import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import MapComp from "./MapComp";

const App = () => {
  return (
    <>
      <div>Cycle There!</div>
      <div>
        <MapComp></MapComp>
      </div>
    </>
  );
};

render(<App />, document.getElementById("root"));
