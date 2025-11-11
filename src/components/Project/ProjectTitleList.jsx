import { Typography, Box } from "@mui/material";

export default function ProjectTitleList({ projects, activeId, onSelect }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "inherit",
        gap: 4,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {projects.map((p) => (
        <Typography
          key={p.id}
          onClick={() => onSelect(p.id)}
          sx={{
            fontWeight: p.id === activeId ? 700 : 400,
            opacity: p.id === activeId ? 1 : 0.6,
            cursor: p.id === activeId ? "default" : "pointer",
            transition: "all 0.3s",
            "&:hover": { opacity: 1, transform: "scale(1.05)" },
          }}
        >
          {p.title}
        </Typography>
      ))}
    </Box>
  );
}