import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

const CONTACT_EMAIL = 'cys030730@gmail.com';
const GITHUB_URL = 'https://github.com/cys030730-hub';

/**
 * ContactInfoPanel 컴포넌트
 *
 * Contact 섹션 좌측에 배치되는 연락처 정보 패널. 이메일(아이콘+텍스트)과
 * SNS 링크(동그란 라인 아이콘 버튼)를 보여준다.
 *
 * Example usage:
 * <ContactInfoPanel />
 */
function ContactInfoPanel() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography
        sx={{
          fontSize: { xs: '1.5rem', md: '1.8rem' },
          fontWeight: 700,
          color: '#FFFFFF',
        }}
      >
        Contact
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <EmailOutlinedIcon sx={{ fontSize: '1.1rem', color: '#FFFFFF' }} />
        <Typography
          component="a"
          href={`mailto:${CONTACT_EMAIL}`}
          sx={{
            fontSize: { xs: '0.95rem', md: '1rem' },
            color: '#FFFFFF',
            textDecoration: 'none',
            '&:hover': { color: 'var(--color-link-hover)' },
          }}
        >
          {CONTACT_EMAIL}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 1.5 }}>
        <IconButton
          component="a"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to GitHub profile"
          sx={{
            width: 36,
            height: 36,
            border: '1px solid #FFFFFF',
            color: '#FFFFFF',
            '&:hover': {
              borderColor: 'var(--color-accent)',
              color: 'var(--color-accent)',
            },
          }}
        >
          <GitHubIcon sx={{ fontSize: '1.1rem' }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ContactInfoPanel;
