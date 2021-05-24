module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#D8D5DB",
        "accent-2": "#ADACB5",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        space: {
          light: "#4A516D",
          DEFAULT: "#2D3142",
          dark: "#191B24",
        },
        lavender: "#EAE8FF",
        babyblue: "#B0D7FF",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
};
