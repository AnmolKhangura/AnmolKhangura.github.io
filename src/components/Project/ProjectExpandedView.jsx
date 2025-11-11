import {
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
  Chip,
  Fade,
  Zoom,
  Grid,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import ProjectTitleList from "./ProjectTitleList";

export default function ProjectExpandedView({
  project,
  projects,
  onSelect,
  onClose,
}) {
  return (
    <Fade in timeout={400}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        {/* Sidebar (titles of other projects) */}
        <Box
          sx={(theme) => ({
            borderBottom: `1px solid ${theme.palette.primary.transparent}`,
            p: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <ProjectTitleList
            projects={projects}
            activeId={project.id}
            onSelect={onSelect}
          />
        </Box>

        {/* Main Expanded Content */}
        <Box
          sx={{
            flexGrow: 1,
            p: { xs: 3, md: 2 },
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            // alignItems: "start",
          }}
        >
          <Box sx={{ alignSelf: "flex-end" }}>
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Box>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }} sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}>
              {project.image && (
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    maxHeight: 400,
                    // objectFit: "cover",
                    objectFit: "contain",
                    borderRadius: 3,
                    // mb: 3,
                  }}
                />
              )}
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}
              sx={{ width: "100%" }}
            >
              <Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  {project.date}
                </Typography>

                <Typography variant="body1" sx={{ mb: 3, maxWidth: 800 }}>
                  {project.description}
                </Typography>

                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {project.tech.map((tech, i) => (
                    <Zoom
                      in
                      key={`tech-chip-${i}`}
                      timeout={300}
                      style={{ transitionDelay: `${(i + 1) * 120}ms` }}
                    >
                      <Chip
                        label={tech}
                        variant="outlined"
                        sx={{
                          fontWeight: 500,
                          color: "text.primary",
                        }}
                      />
                    </Zoom>
                  ))}
                </Stack>

                <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
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
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Fade>
  );
}
