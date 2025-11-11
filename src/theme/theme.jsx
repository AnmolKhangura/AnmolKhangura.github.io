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
            default: "#f8f8f8ff",
            paper: "#eaeaeaff",
          },
          text: {
            primary: "#000000ff",
            secondary: "#555555",
          },
        }
      : {
          primary: { main: "#ffffffff", transparent: "#ffffff1a"},
          secondary: { main: "#cccccc"},
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

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "nav" },
          style: ({ theme }) => ({
            color: theme.palette.text.primary,
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "transparent",
              boxShadow: "none",
              textShadow: `0 0 25px ${theme.palette.text.primary}`,
            },
            "&:active": {
              transform: "scale(1.1)",
            },
          }),
        },
      ],
    },
  },

  //   shape: {
  //     borderRadius: 12,
  //   },
});

export const createAppTheme = (mode) => createTheme(getDesign(mode));
