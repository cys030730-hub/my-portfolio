import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/**
 * AboutSection 컴포넌트
 *
 * Home 페이지의 About Me 섹션. 간단한 자기소개와 더 알아보기 버튼이 들어갈 자리.
 *
 * Example usage:
 * <AboutSection />
 */
function AboutSection() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        bgcolor: 'var(--color-bg-primary)',
        display: 'flex',
        justifyContent: 'center',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
        <Card
          sx={{
            p: { xs: 3, md: 5 },
            textAlign: 'center',
            border: '1px solid var(--color-border-light)',
            bgcolor: 'var(--color-button-primary)',
            boxShadow: 'none',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              lineHeight: 1.6,
              color: 'var(--color-text-primary)',
              mb: 3,
            }}
          >
            여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: 'var(--color-link)',
              borderColor: 'var(--color-border)',
              '&:hover': {
                borderColor: 'var(--color-accent)',
                color: 'var(--color-link-hover)',
              },
            }}
          >
            더 알아보기
          </Button>
        </Card>
      </Container>
    </Box>
  );
}

export default AboutSection;
