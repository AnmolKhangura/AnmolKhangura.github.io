import { Box, Typography, Button } from "@mui/material";
import '../App.css';

function About() {
  return (
    <Box id="about" sx={{ textAlign: "center", py: 8 }}>
      <Typography variant="h3" gutterBottom>
        Hi, I'm Anmol
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Computer Science student & aspiring software engineer.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        href="#projects"
        sx={{ mt: 2 }}
      >
        View My Work
      </Button>
    </Box>
  );
}

export default About;