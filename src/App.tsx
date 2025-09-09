import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { FooterMinimal } from './components/footer-minimal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <FooterMinimal />
      </div>
    </Router>
  );
}