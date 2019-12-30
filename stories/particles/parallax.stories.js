import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/themes/theme-1';
import { Parallax } from '../../src/app';
import { HeightMinusNavbar } from '../../src/layout';

export default {
  title: 'Particles.Parallax',
};

const insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};

export const ParallaxSection = () => (
  <ThemeProvider theme={theme}>
    <Parallax bgImage="http://www.fillmurray.com/500/320" strength={200}>
      <HeightMinusNavbar>
        <div style={insideStyles}>HTML inside the parallax</div>
      </HeightMinusNavbar>
    </Parallax>
    <div style={{ height: '100px', background: 'white' }}></div>
    <Parallax bgImage="http://www.fillmurray.com/500/320" strength={500}>
      <div style={{ height: 500 }}>
        <div>HTML inside the parallax</div>
      </div>
    </Parallax>
    <div style={{ height: '100px', background: 'white' }}></div>
    <Parallax
      bgImage="http://www.fillmurray.com/500/320"
      strength={200}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: 'absolute',
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: '50%',
              top: '50%',
              borderRadius: '50%',
              transform: 'translate(-50%,-50%)',
              width: percentage * 500,
              height: percentage * 500,
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
        <div style={insideStyles}>renderProp</div>
      </div>
    </Parallax>
  </ThemeProvider>
);
