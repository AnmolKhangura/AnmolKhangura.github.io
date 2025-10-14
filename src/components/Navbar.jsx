import { AppBar, Toolbar, Button } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="sticky" sx={{
      background: "transparent",
      backdropFilter: "blur(10px)",
      boxShadow: "none",
    }}>
      <Toolbar>
        <Button color="primary" href="#about" disableRipple
        sx={{
          "&:hover": {
            backgroundColor: "transparent",
            boxShadow: "none",
            textShadow: "0 0 20px rgba(255, 255, 255, 1)",
            // textDecorationColor: "text.primary",
          },
          "&:active": {
            transform: "scale(0.98)",
          },
        }}>Home</Button>
        <Button color="inherit" href="#experience">Experience</Button>
        <Button color="inherit" href="#projects">Projects</Button>
        <Button color="inherit" href="#contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;