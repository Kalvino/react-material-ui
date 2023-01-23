import React, { useContext } from 'react';
import {
  Box,
  CssBaseline,
  Fab,
  ThemeProvider,
  Toolbar
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import ScrollTop from './ScrollTop';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user, setUser } = useContext(AuthContext);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#0989e3",
        light: "#63b8ff",
        dark: "#3C32AA",
        contrastText: "#000",
      },
      secondary: {
        main: "#4db6ac",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
    },
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box
          height='100vh'
          display='flex'
          flexDirection='column'
        >
          <Router>
            <Navbar />
            <Toolbar id="back-to-top-anchor" />
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
            <Footer />
          </Router>
        </Box>
      </ThemeProvider>

      <ScrollTop >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </AuthContext.Provider>
  );
}

export default App;
