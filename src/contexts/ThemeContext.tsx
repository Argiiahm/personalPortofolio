import { createContext } from "react";

// type theme
// hanya boleh "light" atau "dark"
export type Theme = "dark" | "light";

// bentuk data di context
export type ThemeContextType = {
  // state theme
  theme: Theme;

  // function untuk ganti theme
  toggleTheme: () => void;
};

// membuat context
export const ThemeContext = createContext<ThemeContextType | null>(null);
