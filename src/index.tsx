import React from 'react';
import ReactDOM from 'react-dom/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

import MainPage from './MainPage';
import { ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
  typography: {
    fontFamily: [ 'Montserrat', 'Roboto', 'sans-serif' ].join(','),
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  </React.StrictMode>
);