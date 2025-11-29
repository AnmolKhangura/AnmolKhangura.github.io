import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import Fade from "@mui/material/Fade";
import ProjectGridView from "./ProjectGridView";
import ProjectExpandedView from "./ProjectExpandedView";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Vamoose!",
    date: "Jan 2025 - Apr 2025",
    github: "https://github.com/ramanbhandari/vamoose",
    live: "https://vamoose.it.com/",
    shortDesc:
      "A group trip planner that helps friends organize everything in one place: itineraries, events, expenses, maps, and even real-time chat.",
    description:
      "Vamoose! is a group-travel planning app I helped build for my software engineering course. It lets people plan trips together by sharing itineraries, tracking expenses, chatting in real time, and pinning locations on an interactive map. The app includes a clean, responsive UI, a secure invite system, and role-based permissions so each member has the right access.",
    image: "src/assets/images/vamoose.png",
    tech: ["React", "Next.js", "Node.js (Express.js)", "PostgreSQL", "MongoDB", "Socket.io"],
  },
  {
    id: 2,
    title: "Distributed 2PC",
    date: "Jan 2023",
    github: null,
    live: null,
    shortDesc:
      "A mini distributed “Twitter-style” app powered by a custom HTTP server, a 2PC coordinator, and an in-memory database spread across multiple worker nodes.",
    description:
      "This project is a small distributed system where I built almost everything from scratch. The backend runs on a custom Python HTTP server that handles routing, JSON parsing, and cookie-based authentication without using any frameworks. \n\nFor storage, I designed a distributed in-memory database made up of multiple worker nodes. A Two-Phase Commit (2PC) coordinator manages all writes to keep the data consistent across every node. The coordinator is event-driven and uses select() to handle many connections at once, while each worker uses per-key locking and round-robin load balancing to process requests smoothly.",
    image: "src/assets/images/distributed2pc.gif",
    tech: ["Python (sockets)", "Distributed Systems", "Two-Phase Commit", "Event-Driven Programming"],
  },
  {
    id: 3,
    title: "Note App",
    date: "Nov 2025",
    github: "https://github.com/AnmolKhangura/note-app",
    live: null,
    shortDesc:
      "A full-stack note-taking app where users can create, edit, and organize notes with secure login using email/password or Google.",
    description:
      "This is a full-stack note-taking application built with a React frontend and a Node/Express backend. Users can sign up using either a regular email/password or Google OAuth, and sessions are handled with secure JWT-based authentication.\n\nThe app lets users create, edit, delete, and organize notes, all stored in a PostgreSQL database. The backend follows a clean MVC structure, and the UI is simple, responsive, and easy to use. It also includes protected routes, form validation, and a clean API layer between the frontend and the server.",
    image: "src/assets/images/note_app.png",
    tech: ["React", "Node.js (Express.js)", "PostgreSQL", "JWT", "Google OAuth", "REST API"],
  },
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
