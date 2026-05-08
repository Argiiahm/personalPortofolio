import { useEffect, useState, type ReactNode } from "react";

// import context + type theme
import { ThemeContext, type Theme } from "../contexts/ThemeContext";

// provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // state theme
  // ambil dari localStorage
  // kalau kosong default "light"
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "dark";
  });

  // function ganti theme
  const toggleTheme = () => {
    //prev = value sebelumnya.
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // jalan setiap theme berubah
  useEffect(() => {
    // simpan theme ke localStorage
    localStorage.setItem("theme", theme);

    // hapus class lama
    document.documentElement.classList.remove("light", "dark");

    // tambahkan class baru
    // hasil:
    // <html class="dark">
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    // kirim data theme ke semua component
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
