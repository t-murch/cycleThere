import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Box, Button, Grommet, Heading, Collapsible } from "grommet";
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
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Grommet theme={customTheme} full>
        <Box fill>
          <AppBar>
            <Heading level="3" margin="none">
              Cycle There!
            </Heading>
            <Button
              icon={<Menu />}
              onClick={() => setShowSidebar(!showSidebar)}
            />
          </AppBar>
          <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
            <Box flex align="center" justify="center">
              Body for the Map.
            </Box>
            <Collapsible direction="horizontal" open={showSidebar}>
              <Box
                flex
                width="medium"
                background="light-2"
                elevation="small"
                align="center"
                justify="center"
              >
                SideBar for Settings.
              </Box>
            </Collapsible>
          </Box>
        </Box>
      </Grommet>
    </>
  );
};

render(<App />, document.getElementById("root"));
