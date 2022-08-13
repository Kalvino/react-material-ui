import React from 'react';
import { 
  Box, 
  CssBaseline, 
  Fab, 
  Fade, 
  Paper, 
  ThemeProvider,
  Toolbar,
  Typography, 
  useScrollTrigger
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


interface Props {
  children: React.ReactElement;
}

const ScrollTop = (props: Props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

function App() {
  const [auth, setAuth] = React.useState(true);
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
    <>
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
                  element={<route.component/>}
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
    </>
  );
}

export default App;
