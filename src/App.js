import React from 'react';
import Layout from './Layout';
import { ThemeProvider } from '@material-ui/core'
import {theme} from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Layout/>
      </ThemeProvider>
  );
}

export default App;
