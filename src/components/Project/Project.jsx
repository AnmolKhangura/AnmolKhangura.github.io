import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import Fade from "@mui/material/Fade";
import ProjectGridView from "./ProjectGridView";
import ProjectExpandedView from "./ProjectExpandedView";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Vamoose!",
    date: "May 2024 - Aug 2024",
    github: "https://github.com/example/vamoose",
    live: "https://vamoose.app",
    shortDesc:
      "A group trip planning web app with real-time chat and itinerary builder.",
    description:
      "Vamoose! helps groups plan trips collaboratively. It features real-time chat, expense tracking, interactive maps, and itinerary management. Built with React, Next.js, Node, Express, PostgreSQL (Prisma), and MongoDB (Mongoose).",
    image: "src/assets/images/test.png",
    tech: ["React", "Next.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    id: 2,
    title: "Distributed 2PC",
    date: "May 2024 - Aug 2024",
    github: "https://github.com/example/vamoose",
    live: "https://vamoose.app",
    shortDesc:
      "A group trip planning web app with real-time chat and itinerary builder.",
    description:
      "Vamoose! helps groups plan trips collaboratively. It features real-time chat, expense tracking, interactive maps, and itinerary management. Built with React, Next.js, Node, Express, PostgreSQL (Prisma), and MongoDB (Mongoose).",
    image: "src/assets/images/image.png",
    tech: ["React", "Next.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    id: 3,
    title: "Vamoose!",
    date: "May 2024 - Aug 2024",
    // github: "https://github.com/example/vamoose",
    // live: "https://vamoose.app",
    shortDesc:
      "A group trip planning web app with real-time chat and itinerary builder.",
    description:
      "Vamoose! helps groups plan trips collaboratively. It features real-time chat, expense tracking, interactive maps, and itinerary management. Built with React, Next.js, Node, Express, PostgreSQL (Prisma), and MongoDB (Mongoose).",
    image: "/images/vamoose.png",
    tech: ["React", "Next.js", "Express", "PostgreSQL", "MongoDB"],
  },
    {
    id: 4,
    title: "Vamoose!",
    date: "May 2024 - Aug 2024",
    // github: "https://github.com/example/vamoose",
    // live: "https://vamoose.app",
    shortDesc:
      "A group trip planning web app with real-time chat and itinerary builder.",
    description:
      "Vamoose! helps groups plan trips collaboratively. It features real-time chat, expense tracking, interactive maps, and itinerary management. Built with React, Next.js, Node, Express, PostgreSQL (Prisma), and MongoDB (Mongoose).",
    image: "/images/vamoose.png",
    tech: ["React", "Next.js", "Express", "PostgreSQL", "MongoDB"],
  },
    {
    id: 5,
    title: "Vamoose!",
    date: "May 2024 - Aug 2024",
    // github: "https://github.com/example/vamoose",
    // live: "https://vamoose.app",
    shortDesc:
      "A group trip planning web app with real-time chat and itinerary builder.",
    description:
      "Vamoose! helps groups plan trips collaboratively. It features real-time chat, expense tracking, interactive maps, and itinerary management. Built with React, Next.js, Node, Express, PostgreSQL (Prisma), and MongoDB (Mongoose).",
    image: "/images/vamoose.png",
    tech: ["React", "Next.js", "Express", "PostgreSQL", "MongoDB"],
  },
      {
    id: 6,
    title: "Vamoose!",
    date: "May 2024 - Aug 2024",
    // github: "https://github.com/example/vamoose",
    // live: "https://vamoose.app",
    shortDesc:
      "A group trip planning web app with real-time chat and itinerary builder.",
    description:
      "Vamoose! helps groups plan trips collaboratively. It features real-time chat, expense tracking, interactive maps, and itinerary management. Built with React, Next.js, Node, Express, PostgreSQL (Prisma), and MongoDB (Mongoose).",
    image: "/images/vamoose.png",
    tech: ["React", "Next.js", "Express", "PostgreSQL", "MongoDB"],
  },
      {
    id: 7,
    title: "Vamoose!",
    date: "May 2024 - Aug 2024",
    // github: "https://github.com/example/vamoose",
    // live: "https://vamoose.app",
    shortDesc:
      "A group trip planning web app with real-time chat and itinerary builder.",
    description:
      "Vamoose! helps groups plan trips collaboratively. It features real-time chat, expense tracking, interactive maps, and itinerary management. Built with React, Next.js, Node, Express, PostgreSQL (Prisma), and MongoDB (Mongoose).",
    image: "/images/vamoose.png",
    tech: ["React", "Next.js", "Express", "PostgreSQL", "MongoDB"],
  },
  // add more projects here...
];
function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const handleSelect = (id) => setExpandedId(id);
  const handleClose = () => setExpandedId(null);

  return (
    <Box
      id="projects"
      className="section"
      sx={{ py: 6, scrollMarginTop: 64, minHeight: "calc(100vh - 64px)" }}
    >
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Projects
      </Typography>

      {!expandedId && (
        <Fade in={!expandedId} timeout={500} unmountOnExit>
          <Box sx={{ width: "100%" }}>
            <ProjectGridView projects={projects} onSelect={handleSelect} />
          </Box>
        </Fade>
      )}

      {expandedId && (
        <Fade in={!!expandedId} timeout={500} unmountOnExit>
          <Box sx={{ width: "100%", height: "100%" }}>
            <ProjectExpandedView
              project={projects.find((p) => p.id === expandedId)}
              projects={projects}
              onSelect={handleSelect}
              onClose={handleClose}
            />
          </Box>
        </Fade>
      )}
    </Box>
  );
}

export default Projects;
