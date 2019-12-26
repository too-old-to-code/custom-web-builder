import React, { useState } from "react";
import { NavMenuComplete, MainArea, Hero } from "../../src/layout";
import { ThemeProvider } from "styled-components";
import { theme } from '../../src/themes/theme-1';
import logo from '../../static/favicon.ico';

export default {
  title: "Organisms.Navbar"
};

export const Standard = () => {
  const [modal, changeModal] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <NavMenuComplete
          burgerStyle="spin"
          logo={<img style={{ height: "100%" }} src={logo} />}
          desktopItems={
            <React.Fragment>
              <span>About</span>
              <span>Home</span>
            </React.Fragment>
          }
          mobileItems={
            <React.Fragment>
              <a href="#">About</a>
              <div>Home</div>
            </React.Fragment>
          }
        />
        <MainArea>
          <Hero image="https://www.fillmurray.com/640/360">
            <p>hello</p>
            <p>hello</p>
            <p>bugger</p>
            <p>hello</p>
          </Hero>
          <Hero>
            <h1>Other stuff here</h1>
          </Hero>
        </MainArea>
    </ThemeProvider>
  );
};
