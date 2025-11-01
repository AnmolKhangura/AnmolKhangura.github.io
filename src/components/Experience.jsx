import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

function Experience() {
  return (
    <Box
      id="experience"
      className="section"
      sx={{ py: 6, scrollMarginTop: 64, minHeight:"calc(100vh - 64px)" }}
    >
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Junior Web & Application Developer – Government of Manitoba"
            secondary="Jan 2024 – Apr 2025 | Designed 80+ forms, focused on accessibility and usability."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Travify Project – University Group Project"
            secondary="May 2024 – Aug 2024 | Android app for group travel planning."
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default Experience;
