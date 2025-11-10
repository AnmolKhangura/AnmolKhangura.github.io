import {
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
  Chip,
  Fade,
  Zoom,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import ProjectTitleList from "./ProjectTitleList";
// import ProjectTechChips from "./ProjectTechChips";

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
          flexDirection: { xs: "column", md: "row" },
          height: "100%",
          width: "100%",
        }}
      >
        {/* Sidebar (titles of other projects) */}
        <Box
          sx={{
            flexBasis: { xs: "auto", md: "20%" },
            borderRight: { md: "1px solid rgba(255,255,255,0.1)" },
            p: 2,
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
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
            p: { xs: 3, md: 6 },
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ alignSelf: "flex-end" }}>
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Box>

          <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            {project.date}
          </Typography>

          {project.image && (
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                width: "100%",
                maxHeight: 360,
                objectFit: "cover",
                borderRadius: 3,
                mb: 3,
              }}
            />
          )}

          <Typography
            variant="body1"
            sx={{ mb: 3, textAlign: "center", maxWidth: 800 }}
          >
            {project.description}
          </Typography>

          {/* <ProjectTechChips tech={project.tech} /> */}
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
      </Box>
    </Fade>
  );
}
