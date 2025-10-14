import React, { useState, useEffect, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createAppTheme } from "./theme/theme.jsx";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

function App() {

    // Detect system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [mode, setMode] = useState(prefersDark ? "dark" : "light");

  // Listen for system changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setMode(e.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Generate theme dynamically
  const theme = useMemo(() => createAppTheme(mode), [mode]);


  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="md">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </ThemeProvider>
    </>
  );
}

export default App;