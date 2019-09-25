import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Grommet, Box, Heading, Button } from "grommet";
import { Menu } from "grommet-icons";
import customTheme from "./theme";
import MainContainer from "./MainContainer";

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

const App = () => {
  return (
    <>
      <Grommet theme={customTheme} full>
        <Box fill>
          <AppBar>
            <Heading level="3" margin="none">
              Cycle There!
            </Heading>
            <Button icon={<Menu />} onClick={() => {}} />
          </AppBar>
          <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
            <Box flex align="center" justify="center">
              Body for the Map.
            </Box>
            <Box
              width="medium"
              background="light-2"
              elevation="small"
              align="center"
              justify="center"
            >
              SideBar for Settings.
            </Box>
          </Box>
        </Box>
      </Grommet>
    </>
  );
};

render(<App />, document.getElementById("root"));
