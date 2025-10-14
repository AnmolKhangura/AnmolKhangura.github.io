import { createTheme } from "@mui/material/styles";

// Function to generate design tokens based on the mode (light or dark)
const getDesign = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#000000ff" },
          secondary: { main: "#555555" },
          background: {
            default: "#ffffff",
            paper: "#f9f9f9",
          },
          text: {
            primary: "#000000ff",
            secondary: "#555555",
          },
        }
      : {
          primary: { main: "#ffffffff" },
          secondary: { main: "#cccccc" },
          background: {
            default: "#242424",
            paper: "#2e2e2e",
          },
          text: {
            primary: "#ffffff",
            secondary: "#cccccc",
          },
        }),
  },

  typography: {
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
      marginBottom: "1rem",
    },
    body1: {
      lineHeight: 1.7,
    },
  },

//   shape: {
//     borderRadius: 12,
//   },
});

export const createAppTheme = (mode) => createTheme(getDesign(mode));