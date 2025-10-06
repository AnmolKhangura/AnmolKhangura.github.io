import { Box, Typography, Button } from "@mui/material";

function Contact() {
  return (
    <Box id="contact" sx={{ py: 6, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" gutterBottom>
        Feel free to reach out if you’d like to collaborate or connect!
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        href="mailto:your.email@example.com"
      >
        Email Me
      </Button>
    </Box>
  );
}

export default Contact;