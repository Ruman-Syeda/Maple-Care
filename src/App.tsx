// src/App.tsx
import './i18n';                                 // ❶  Initialises react-i18next
import { useTranslation } from 'react-i18next';  // ❷  Hook to read translations

import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from './components/layout';
import Index from './pages/Index';
import Compare from './pages/Compare';
import Knowledge from './pages/Knowledge';
import TopicDetail from './pages/TopicDetail';
import Infographic from './pages/Infographic';
import Advocacy from './pages/Advocacy';
import Map from './pages/Map';
import Feedback from './pages/Feedback';
import NotFound from './pages/NotFound';
import { AccessibilityWidget } from './components/accessibility-widget'; // ❸

const queryClient = new QueryClient();

const App = () => {
  const { t } = useTranslation();               // ❹  Example usage of i18n

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* Example header that proves language switching works */}
        <header className="sr-only">{t('greeting')}</header>

        <BrowserRouter>
          {/* ❺  Floating button is available on every page */}
          <AccessibilityWidget />

          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/topic/:topicId" element={<TopicDetail />} />
              <Route path="/infographic/:infographicId" element={<Infographic />} />
              <Route path="/advocacy" element={<Advocacy />} />
              <Route path="/map" element={<Map />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;