import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ py: 3, textAlign: "center", mt: 4 }}>
      <Typography variant="body2">
        Built and Designed by Anmolpreet Khangura.
      </Typography>
      <Typography variant="body2">
        All rights reserved © {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}

export default Footer;
