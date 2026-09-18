import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const PLACEHOLDER_COUNT = 4;

/**
 * ProjectsSection 컴포넌트
 *
 * Home 페이지의 Projects 섹션. 대표작 썸네일 3-4개와 더 보기 버튼이 들어갈 자리.
 *
 * Example usage:
 * <ProjectsSection />
 */
function ProjectsSection() {
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
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.6,
            color: 'var(--color-text-primary)',
            textAlign: 'center',
            mb: 4,
          }}
        >
          여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
            <Grid key={index} size={{ xs: 6, md: 3 }}>
              <Card
                sx={{
                  aspectRatio: '1 / 1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 0,
                  bgcolor: 'var(--color-primary-light)',
                  boxShadow: 'none',
                  color: 'var(--color-text-primary)',
                }}
              >
                Project {index + 1}
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center' }}>
          <Button
            sx={{
              color: 'var(--color-text-primary)',
              bgcolor: 'var(--color-primary-light)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              '&:hover': {
                bgcolor: 'var(--color-primary-light)',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            더 보기
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ProjectsSection;
