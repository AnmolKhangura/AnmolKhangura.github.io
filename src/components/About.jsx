import { Box, Typography, Button, Avatar, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../App.css";

function About() {
  return (
    <Box
      id="about"
      className="section"
      sx={{
        pt: "15vh",
        pb: 6,
        textAlign: "center",
        scrollMarginTop: 64,
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",

        alignItems: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Hi, I'm Anmol
      </Typography>

      <Typography variant="h5" color="text.secondary" gutterBottom>
        Computer Science student & aspiring software engineer
      </Typography>

      <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
        <Typography variant="body1" color="text.secondary">
          I'm a final year Computer Science student who loves exploring how
          things work under the hood — not to rebuild everything from scratch,
          but to truly understand how and why it works. I enjoy learning new
          technologies by experimenting, breaking things, and trying out
          different ideas. Lately, I've been diving into distributed systems,
          app scalability, and system architecture — and I'm excited to keep
          learning how large systems are designed and built.
        </Typography>
      </Box>

      <Box
        sx={{
          mt: 3,
          mb: 4,
          maxWidth: 200,
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        {[
          {
            href: "https://github.com/AnmolKhangura",
            icon: <GitHubIcon fontSize="large" />,
          },
          {
            href: "https://www.linkedin.com/in/anmolpreet-khangura/",
            icon: <LinkedInIcon fontSize="large" />,
          },
          {
            href: "mailto:khangura@myumanitoba.ca",
            icon: <EmailIcon fontSize="large" />,
          },
        ].map(({ href, icon }) => (
          <IconButton
            key={href}
            disableRipple
            sx={{
              m: 1,
              cursor: "default",
              "& svg": {
                cursor: "pointer",
                transition: "0.1s ease",
                "&:hover": {
                  transform: "scale(1.15)",
                  filter: (theme) =>
                    `drop-shadow(0 0 8px ${theme.palette.secondary.main})`,
                },
              },
            }}
            component="a"
            href={href}
            target="_blank"
            color="secondary"
          >
            {icon}
          </IconButton>
        ))}
      </Box>
      {/* 
      <Button
        variant="contained"
        color="secondary"
        href="#projects"
        sx={{ mt: "10vh", maxWidth: 150 }}
      >
        View My Work
      </Button> */}
    </Box>
  );
}

export default About;
