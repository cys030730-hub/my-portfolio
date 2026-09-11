import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * HeroSection 컴포넌트
 *
 * Home 페이지 최상단 히어로 섹션. 메인 비주얼/이름/소개가 들어갈 자리.
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        bgcolor: 'var(--color-bg-secondary)',
        borderBottom: '1px solid var(--color-border)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 8, md: 14 },
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
          여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default HeroSection;
