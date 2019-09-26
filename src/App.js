<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import {
  Box,
  Button,
  Collapsible,
  Grommet,
  Heading,
  Layer,
  ResponsiveContext
} from 'grommet';
import { Menu, FormClose } from 'grommet-icons';
import customTheme from './theme';
import MainContainer from './MainContainer';

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    {...props}
  />
);

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Grommet theme={customTheme} full>
        <ResponsiveContext.Consumer>
          {size => (
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
              <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align="center" justify="center">
                  Body for the Map.
                </Box>
                {!showSidebar || size !== 'small' ? (
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
                ) : (
                  <Layer>
                    <Box
                      background="light-2"
                      tag="header"
                      justify="end"
                      align="center"
                      direction="row"
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => setShowSidebar(false)}
                      />
                    </Box>
                    <Box
                      fill
                      background="light-2"
                      align="center"
                      justify="center"
                    >
                      SideBar for Settings.
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
>>>>>>> 894e4787433f1ce141bcb9ca889927deed22c530
    </>
  );
};

render(<App />, document.getElementById('root'));
