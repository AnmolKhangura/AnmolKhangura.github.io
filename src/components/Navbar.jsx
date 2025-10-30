import { AppBar, Toolbar, Button } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="sticky" sx={{
      background: "transparent",
      backdropFilter: "blur(10px)",
      boxShadow: "none",
    }}>
      <Toolbar>
        <Button color="primary" href="#about" disableRipple variant="nav">Home</Button>
        <Button color="primary" href="#experience" disableRipple variant="nav">Experience</Button>
        <Button color="primary" href="#projects" disableRipple variant="nav">Projects</Button>
        <Button color="primary" href="#contact" disableRipple variant="nav">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;