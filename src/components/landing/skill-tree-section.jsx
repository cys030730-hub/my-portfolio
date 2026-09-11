import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

/**
 * SkillTreeSection 컴포넌트
 *
 * Home 페이지의 Skill Tree 섹션. 기술 스택을 트리/프로그레스바로 시각화할 자리.
 *
 * Example usage:
 * <SkillTreeSection />
 */
function SkillTreeSection() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        bgcolor: 'var(--color-bg-sky)',
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
            }}
          >
            여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
          </Typography>
        </Card>
      </Container>
    </Box>
  );
}

export default SkillTreeSection;
