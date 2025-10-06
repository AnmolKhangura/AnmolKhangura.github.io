import { AppBar, Toolbar, Button } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Button color="inherit" href="#about">Home</Button>
        <Button color="inherit" href="#experience">Experience</Button>
        <Button color="inherit" href="#projects">Projects</Button>
        <Button color="inherit" href="#contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;