import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
  Stack,
} from "@mui/material";

export default function ProjectGridView({ projects, onSelect }) {
  return (
    <Grid
      container
      spacing={2}
      columns={{ xs: 4, sm: 8, md: 12}}
      justifyContent={"center"}
    >
      {projects.map((project) => {
        const hasBoth = project.github && project.live;
        const hasNone = !project.github && !project.live;

        return (
          <Grid key={project.id} size={{ xs: 4, sm: 4, md: 4}}>
            <Card
              onClick={() => onSelect(project.id)}
              variant="outlined"
              sx={{
                backgroundColor: "transparent",
                cursor: "pointer",
                height: 280,
                display: "flex",
                flexDirection: "column",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                borderRadius: 3,
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: (theme) =>
                    `0 0 25px ${theme.palette.secondary.main}`,
                },
              }}
            >
              <CardHeader
                sx={{
                  pb: 0,
                  "& .MuiCardHeader-content": {
                    display: "flex",
                    alignItems: "center",
                  },
                  "& .MuiCardHeader-action": {
                    alignSelf: "center",
                    marginTop: 0,
                    marginRight: 0,
                  },
                }}
                title={project.title}
                slotProps={{
                  title: {
                    fontWeight: 600,
                    color: "text.primary",
                    variant: "h6",
                  },
                }}
                action={
                  <Button
                    size="small"
                    color="secondary"
                    sx={{
                      textTransform: "none",
                    }}
                  >
                    view details →
                  </Button>
                }
              />
              <CardContent
                sx={{
                  backgroundColor: "none",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ mt: 1 }}
                  color="text.secondary"
                >
                  {project.shortDesc}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {project.date}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: "auto", mb: 3, justifyContent: "center" }}>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ width: "100%", justifyContent: "center" }}
                >
                  {project.github && (
                    <Button
                      variant="outlined"
                      href={project.github}
                      target="_blank"
                      sx={{ width: hasBoth ? "auto" : "80%"}}
                    >
                      GitHub
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      variant="contained"
                      href={project.live}
                      target="_blank"
                      sx={{ width: hasBoth ? "auto" : "80%"}}
                    >
                      Live Site
                    </Button>
                  )}
                  {hasNone && ( <Button variant="outlined" sx={{width:"80%"}}>View Details</Button> )}
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
