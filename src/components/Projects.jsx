import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

function Projects() {
  const projects = [
    {
      title: "Vamoose!",
      desc: "Group trip planning app (React, Next.js, Node.js)",
    },
    {
      title: "Travify",
      desc: "Android travel planning app (Java, Android Studio)",
    },
    { title: "Portfolio", desc: "This site! (React, Vite, GitHub Pages)" },
  ];

  return (
    <Box
      id="projects"
      className="section"
      sx={{ py: 6, scrollMarginTop: 64, minHeight: "calc(100vh - 64px)" }} 
    >
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((proj, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{proj.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {proj.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
