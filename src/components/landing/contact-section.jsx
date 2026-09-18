import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ContactInfoPanel from './contact-info-panel.jsx';
import GuestbookForm from './guestbook-form.jsx';
import GuestbookList from './guestbook-list.jsx';
import useGuestbook from '../../hooks/use-guestbook.js';

/**
 * ContactSection 컴포넌트
 *
 * Home 페이지의 Contact 섹션. 좌측 연락처 정보와 우측 방명록(등록 폼 + 목록)을 2단으로 배치한다.
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  const { entries, isLoading, error, addEntry, isSubmitting } = useGuestbook();

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        background: 'linear-gradient(to bottom, var(--color-bg-primary), var(--color-forest-light))',
        display: 'flex',
        justifyContent: 'center',
        py: { xs: 8, md: 16 },
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
        <Grid container spacing={{ xs: 6, md: 8 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <ContactInfoPanel />
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <GuestbookForm onSubmit={addEntry} isSubmitting={isSubmitting} />
              <GuestbookList entries={entries} isLoading={isLoading} error={error} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactSection;
