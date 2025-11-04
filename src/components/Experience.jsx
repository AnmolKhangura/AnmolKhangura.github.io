import { useState } from "react";

import {
  Typography,
  Box,
  Divider,
  Paper,
  Grid,
  Stack,
  Chip,
  Fade,
  Zoom,
} from "@mui/material";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineItemClasses,
} from "@mui/lab";

function Experience() {
  const [selected, setSelected] = useState(0);

  const experiences = [
    {
      title: "Developer",
      company: "G3",
      period: "Jan 2024 - Apr 2025",
      description: [
        "Designed, developed, and implemented 80+ public-facing e-forms.",
        "Focused on accessibility, responsive design, and usability.",
        "Collaborated with 20+ clients to gather and refine requirements. Collaborated with 20+ clients to gather and refine requirements.",
        "Collaborated with 20+ clients to gather and refine requirements.",
        "Collaborated with 20+ clients to gather and refine requirements.",
      ],
      tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
    {
      title: "Junior Web & Application Developer",
      company: "Government of Manitoba",
      period: "Jan 2024 - Apr 2025",
      description: [
        "Designed, developed, and implemented 80+ public-facing e-forms.",
        "Focused on accessibility, responsive design, and usability.",
        "Collaborated with 20+ clients to gather and refine requirements.",
      ],
      tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
    {
      title: "Undergraduate Research Assistant",
      company: "University of Manitoba",
      period: "May 2024 - Aug 2024",
      description: [
        "Developed an Android app for simplified group travel planning.",
        "Implemented a relational database and applied TDD with JUnit.",
        "Worked in an agile team environment using GitLab for version control.",
      ],
      tech: ["Java", "Android Studio", "JUnit", "GitLab"],
    },
  ];

  return (
    <Box
      id="experience"
      className="section"
      sx={{ py: 6, scrollMarginTop: 64, minHeight: "calc(100vh - 64px)" }}
    >
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Experience
      </Typography>

      <Grid container spacing={1} alignItems="center">
        <Grid
          item
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-center" },
          }}
        >
          <Box>
            <Timeline
              position="left"
              sx={{
                // code from MUI docs to remove the before pseudo element
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
                m: 0,
              }}
            >
              {experiences.map((exp, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot
                      color={selected === index ? "primary" : "grey"}
                      onClick={() => setSelected(index)}
                      sx={{
                        cursor: "pointer",
                        transition: "0.3s",
                      }}
                    />
                    {index < experiences.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent
                    onClick={() => setSelected(index)}
                    sx={{
                      cursor: "pointer",
                      px: 2,
                      py: 1,
                      borderRadius: 1,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateX(-4px)",
                        textShadow: (theme) =>
                          `0 0 35px ${theme.palette.text.primary}`,
                      },
                      "&:active": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      color={selected === index ? "primary" : "grey"}
                      sx={{ fontWeight: 500 }}
                    >
                      {exp.company.trim()}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        </Grid>

        {/* selected experience details */}
        <Grid item size={{ xs: 12, md: 8 }}>
          <Fade in timeout={1000} key={selected}>
            <Paper
              // variant="outlined"
              elevation={0}
              sx={{
                p: 4,
                minHeight: 400,
                mx: { xs: "auto", md: 0 },
                background: "transparent",
                display: "flex",
                alignItems: { md: "center" },
                justifyContent: { xs: "center", md: "start" },
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {`${experiences[selected].title} @ `}
                  <Typography
                    component="span"
                    variant="subtitle1"
                    sx={{ color: "primary.secondary", fontWeight: 500 }}
                  >
                    {experiences[selected].company}
                  </Typography>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {experiences[selected].period}
                </Typography>
                <Stack spacing={1}>
                  {experiences[selected].description.map((line, i) => (
                    <Zoom
                      in
                      key={`${selected}-desc-${i}`}
                      timeout={400}
                      style={{ transitionDelay: `${(i + 1) * 160}ms` }} // stagger each line
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 0.5,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          "&::before": {
                            content: '"•"',
                            color: "primary.main",
                            fontWeight: "bold",
                          },
                        }}
                      >
                        {line}
                      </Typography>
                    </Zoom>
                  ))}
                </Stack>
                <Divider sx={{ my: 2 }} />

                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {experiences[selected].tech.map((tech, i) => (
                    <Zoom
                      in
                      key={`${selected}-${tech}`}
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
              </Box>
            </Paper>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Experience;
