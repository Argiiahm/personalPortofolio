import { useContext } from "react";
// import context
import { ThemeContext } from "../contexts/ThemeContext";
// custom hook
export const useTheme = () => {
  // ambil data dari ThemeContext
  const context = useContext(ThemeContext);
  // jika provider belum dipasang
  // munculkan error
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  // kembalikan data context
  return context;
};
