import { Grid, Card, CardContent, Typography, Button, Stack } from "@mui/material";

export default function ProjectGridView({ projects, onSelect }) {
  return (
    <Grid
      container
      spacing={2}
      columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
      justifyContent={"center"}
    >
      {projects.map((project) => (
        <Grid key={project.id} size={{ xs: 4, sm: 4, md: 4, lg: 3 }}>
          <Card
            onClick={() => onSelect(project.id)}
            variant="outlined"
            sx={{
              backgroundColor: "transparent",
              cursor: "pointer",
              height: 280,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backdropFilter: "blur(10px)", // optional: soft glass effect
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                // borderColor: "primary.main", // highlight color on hovers
                boxShadow: (theme) => `0 0 25px ${theme.palette.secondary.main}`, // glow effect
              },
            }}
          >
            <CardContent
              sx={{
                backgroundColor: "none",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }} color="text.secondary">
                {project.shortDesc}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {project.date}
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mt: 4 }} justifyContent={"center"}>
                {project.github && (
                  <Button
                    variant="outlined"
                    href={project.github}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                )}
                {project.live && (
                  <Button
                    variant="contained"
                    href={project.live}
                    target="_blank"
                  >
                    Live Site
                  </Button>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
