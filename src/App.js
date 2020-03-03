import React from 'react';
import Home from './Home';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';


const App = () => {
  return (
    <ThemeProvider theme={theme}>   
        <GlobalStyles />
        <Home />   
    </ThemeProvider>
  );
}

export default App;
