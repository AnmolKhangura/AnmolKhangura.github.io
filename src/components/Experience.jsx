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
      title: "Junior Developer Intern",
      company: "G3",
      period: "Jan 2024 - Apr 2025",
      description: [
        "Working as a full-stack developer on internal tools using React, Redux, and ServiceNow (server-side JS, REST APIs, data modeling).",
        "Leading the team's automated UI testing effort using Katalon and defining a scalable, data-driven testing strategy.",
        "Built a data-driven testing framework in Katalon using Groovy, enabling QA to manage all test scenarios through an Excel workbook and automatically generate JSON for execution.",
        "Developed reusable object oriented Groovy modules that allow the automation suite to scale without creating new scripts for each scenario, improving maintainability and reducing duplication.",
      ],
      tech: ["JavaScript", "React", "Redux", "ServiceNow", "REST APIs", "Groovy", "Katalon Studio", "Excel Automation", "Object Oriented Programming", "Data-Driven Testing"],
    },
    {
      title: "Junior Web Developer Intern",
      company: "Government of Manitoba",
      period: "Jan 2024 - Apr 2025",
      description: [
        "Built 80+ public-facing e-forms for different departments using HTML, CSS, JavaScript, and jQuery, focusing on responsive and accessible design.",
        "Worked closely with 20+ clients to understand requirements, improve workflows, and make forms easier and more intuitive for users.",
        "Created reusable JavaScript/jQuery modules that were shared across many forms, helping reduce repeated code and speeding up development for the team.",
        "Developed a prototype backend application for the E-Forms system using Node.js + Express with an MVC structure to manage dynamic form submissions."
      ],
      tech: ["HTML", "CSS", "JavaScript", "jQuery", "Node.js", "Express", "MVC Architecture"],
    },
    {
      title: "Undergraduate Research Assistant",
      company: "University of Manitoba",
      period: "May 2023 - Aug 2023",
      description: [
        "Designed and developed three prototype banking interfaces focused on helping older adults set up proxy accounts for trusted contacts.",
        "Started with paper and digital prototyping, then transformed the designs into functional interfaces using Angular (HTML, CSS, TypeScript).",
        "Conducted usability testing with older adults to understand their needs, pain points, and preferences when navigating digital banking tasks.",
        "Learned how user-centered design and accessibility play a major role in building interfaces that are intuitive, supportive, and easy to use for all age groups."
      ],
      tech: ["Angular", "HTML", "CSS", "TypeScript", "User-Centered Design"],
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
          size={{ xs: 12, md: 3 }}
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
        <Grid item size={{ xs: 12, md: 9 }}>
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
