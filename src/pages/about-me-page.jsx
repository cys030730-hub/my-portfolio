import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * AboutMePage 컴포넌트
 *
 * About Me 상세 페이지. 상세한 자기소개가 들어갈 자리.
 *
 * Example usage:
 * <AboutMePage />
 */
function AboutMePage() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'var(--color-bg-primary)',
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 }, textAlign: 'center' }}>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.6,
            color: 'var(--color-text-primary)',
          }}
        >
          About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutMePage;
