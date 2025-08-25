import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import StudentsPage from "./pages/StudentsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Students from "./components/Students";
import ClassesPage from "./pages/ClassesPage";
import CoursesPage from "./pages/CoursesPage";
import ProjectFormPage from "./pages/ProjectFormPage";
import ScheduleProjectForm from "./pages/ScheduleFormPage";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <ScrollToTop />
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Hero />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/students" element={<StudentsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="/classes" element={<ClassesPage />} />
              <Route path="/courses" element={<CoursesPage/>}/>
              <Route path="/projectform" element={<ProjectFormPage />} />
              <Route path="/scheduleform" element={<ScheduleProjectForm />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
