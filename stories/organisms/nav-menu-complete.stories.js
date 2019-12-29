import React, { useState } from "react";
import { NavMenuComplete, MainArea, Hero } from "../../src/layout";
import { ThemeProvider } from "styled-components";
import { theme } from "../../src/themes/theme-1";
import logo from "../../static/favicon.ico";

export default {
  title: "Organisms.Navbar"
};

export const Standard = () => {
  const [modal, changeModal] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <NavMenuComplete
        center
        burgerStyle="spin"
        logo={<img style={{ height: "100%" }} src={logo} />}
        desktopItems={[
          <span key="about">About</span>,
          <span key="home">Home</span>,
          <span key="profile">Profile</span>,
          <span key="sign">Sign out</span>
        ]}
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
