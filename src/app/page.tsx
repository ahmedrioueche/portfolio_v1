"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import ProjectsCarousel from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import { Reviews } from "./components/Reviews";
import { Feedback } from "./components/Feedback";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { sendEmail } from "@/api/notif";

export default function Home() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
            retry: 1,
          },
        },
      })
  );

  const startTimeRef = useRef<number>(Date.now());
  const timerRef = useRef<NodeJS.Timeout>();

  const notifyMeOnVisitor = useCallback(async (timeSpent: number) => {
    const minutes = Math.floor(timeSpent / 60000);
    const seconds = Math.floor((timeSpent % 60000) / 1000);

    await sendEmail({
      subject: "Portfolio Notification",
      content: `New visitor spent ${minutes}m ${seconds}s on your portfolio`,
    });
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    startTimeRef.current = startTime;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        const timeSpent = Date.now() - startTimeRef.current;
        notifyMeOnVisitor(timeSpent);
      }
    };

    // Send notification when user navigates away or closes tab
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      const timeSpent = Date.now() - startTimeRef.current;
      // Use setTimeout to ensure the email sends before page unloads
      timerRef.current = setTimeout(() => {
        notifyMeOnVisitor(timeSpent);
      }, 0);

      // For Chrome compatibility
      e.preventDefault();
      e.returnValue = "";
    };

    // Track page visibility changes
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Send periodic updates (optional)
    const intervalId = setInterval(() => {
      const timeSpent = Date.now() - startTimeRef.current;
      console.log(
        `User has been on page for ${Math.floor(timeSpent / 1000)} seconds`
      );
    }, 30000);

    return () => {
      // Clear all listeners and timers
      clearInterval(intervalId);
      if (timerRef.current) clearTimeout(timerRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);

      // For normal navigation (not tab closing)
      if (document.visibilityState === "visible") {
        const timeSpent = Date.now() - startTimeRef.current;
        notifyMeOnVisitor(timeSpent);
      }
    };
  }, [notifyMeOnVisitor]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col space-y-16">
      <QueryClientProvider client={queryClient}>
        <div id="home">
          <Banner />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <ProjectsCarousel />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="feedback">
          <Feedback />
        </div>
        <div id="comments">
          <Reviews />
        </div>
      </QueryClientProvider>
    </div>
  );
}
