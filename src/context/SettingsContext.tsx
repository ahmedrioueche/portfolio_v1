"use client";
import { Language } from "@/types/common";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";

interface SettingsContextProps {
  theme: "dark" | "light";
  language: Language;
  toggleTheme: () => void;
  setLanguage: (language: Language) => void;
}

const SettingsContext = createContext<SettingsContextProps | null>(null);

const LOCAL_STORAGE_THEME_KEY = "app-theme";
const LOCAL_STORAGE_LANGUAGE_KEY = "app-language";

// Supported languages in our app
const SUPPORTED_LANGUAGES: Language[] = ["en", "fr", "ar"];

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      return (
        (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as "dark" | "light") ||
        "light"
      );
    }
    return "light";
  });

  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem(
        LOCAL_STORAGE_LANGUAGE_KEY
      ) as Language;
      if (storedLanguage) return storedLanguage;

      const systemLanguage = navigator.language.split("-")[0] as Language;
      return SUPPORTED_LANGUAGES.includes(systemLanguage)
        ? systemLanguage
        : "en";
    }
    return "en";
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
    } catch (error) {
      console.error("Failed to save theme to local storage:", error);
    }
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, language);
      document.documentElement.lang = language;
    } catch (error) {
      console.error("Failed to save language to local storage:", error);
    }
  }, [language]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }, []);

  const handleSetLanguage = useCallback((newLanguage: Language) => {
    setLanguageState(newLanguage);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      language,
      toggleTheme,
      setLanguage: handleSetLanguage,
    }),
    [theme, language, toggleTheme, handleSetLanguage]
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
