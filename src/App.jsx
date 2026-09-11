import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navbar from './components/common/navbar.jsx';
import HomePage from './pages/home-page.jsx';
import AboutMePage from './pages/about-me-page.jsx';
import ProjectsPage from './pages/projects-page.jsx';

/**
 * App 컴포넌트
 *
 * 최상위 라우팅 컴포넌트. Navbar와 Home / About Me / Projects 라우트를 구성한다.
 *
 * Example usage:
 * <App />
 */
function App() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: 'var(--color-bg-primary)' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Box>
  );
}

export default App;
