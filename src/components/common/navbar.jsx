import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Projects', path: '/projects' },
];

/**
 * Navbar 컴포넌트
 *
 * 페이지 상단 네비게이션 바. Home, About Me, Projects 탭을 제공한다.
 *
 * Example usage:
 * <Navbar />
 */
function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          px: { xs: 2, md: 3 },
          py: { xs: 1, md: 1.5 },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: 'var(--color-text-primary)',
          }}
        >
          My Portfolio
        </Typography>
        <Box sx={{ display: 'flex', gap: { xs: 1.5, md: 3 } }}>
          {NAV_ITEMS.map((item) => (
            <Box
              key={item.path}
              component={NavLink}
              to={item.path}
              end={item.path === '/'}
              sx={{
                textDecoration: 'none',
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontWeight: 500,
                color: 'var(--color-link)',
                pb: 0.5,
                borderBottom: '2px solid transparent',
                '&.active': {
                  color: 'var(--color-link-hover)',
                  borderBottom: '2px solid var(--color-accent)',
                },
                '&:hover': {
                  color: 'var(--color-link-hover)',
                },
              }}
            >
              {item.label}
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
