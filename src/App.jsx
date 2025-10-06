import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

export default App;