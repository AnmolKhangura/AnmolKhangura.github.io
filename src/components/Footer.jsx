import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ py: 3, textAlign: "center", bgcolor: "grey.200", mt: 4 }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Anmol | Built with React & MUI
      </Typography>
    </Box>
  );
}

export default Footer;