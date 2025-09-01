import { keyframes } from '@emotion/react';
import { Box } from '@mui/material';
import React from 'react';
import { Logo } from './logo';
import CocinaDigitalFullSizeColorLogo from './shared/CocinaDigitalFullSizeColorLogo';

const bounce1 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 1px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const bounce3 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 3px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

export function SplashScreen() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        // backgroundColor: 'neutral.900',
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        left: 0,
        p: 3,
        position: 'fixed',
        top: 0,
        width: '100vw',
        zIndex: 2000
      }}
    >
      <CocinaDigitalFullSizeColorLogo
        width={400}
        sx={{
          animation: `${bounce1} 0.5s ease-in-out infinite`,
          marginBottom: 2
        }}
      />
    </Box>
  );
}
