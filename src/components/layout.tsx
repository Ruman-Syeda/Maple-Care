
import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/toaster";
import { Toaster as Sonner } from "./ui/sonner";
import { AccessibilityWidget } from "./accessibility-widget";

export function Layout() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <AccessibilityWidget />
        <Toaster />
        <Sonner />
      </div>
    </ThemeProvider>
  );
}
