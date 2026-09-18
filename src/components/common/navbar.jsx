import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Projects', path: '/projects' },
];

/**
 * Navbar 컴포넌트
 *
 * 페이지 상단 네비게이션 바. 검색 아이콘과 Home, About Me, Projects 탭을 제공한다.
 *
 * Example usage:
 * <Navbar />
 */
function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleToggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    setSearchValue('');
  };

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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 3 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isSearchOpen && (
              <InputBase
                autoFocus
                placeholder="검색어를 입력하세요"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                sx={{
                  width: { xs: 120, md: 180 },
                  mr: 1,
                  px: 1,
                  py: 0.25,
                  fontSize: '0.9rem',
                  color: 'var(--color-text-primary)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 1,
                  bgcolor: 'var(--color-button-primary)',
                }}
              />
            )}
            <IconButton
              onClick={handleToggleSearch}
              aria-label={isSearchOpen ? '검색창 닫기' : '검색창 열기'}
              size="small"
              sx={{ color: 'var(--color-text-primary)' }}
            >
              {isSearchOpen ? (
                <CloseIcon sx={{ fontSize: { xs: '1.2rem', md: '1.4rem' } }} />
              ) : (
                <SearchIcon sx={{ fontSize: { xs: '1.2rem', md: '1.4rem' } }} />
              )}
            </IconButton>
          </Box>
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
                  color: 'var(--color-link)',
                  fontWeight: 700,
                  borderBottom: '2px solid var(--color-primary-dark)',
                },
                '&:hover': {
                  color: 'var(--color-primary-dark)',
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
