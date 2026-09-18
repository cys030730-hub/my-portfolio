import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import ContactInfoPanel from './contact-info-panel.jsx';
import GuestbookForm from './guestbook-form.jsx';
import GuestbookList from './guestbook-list.jsx';
import useGuestbook from '../../hooks/use-guestbook.js';

/**
 * ContactSection 컴포넌트
 *
 * Home 페이지의 Contact 섹션. 연락처 정보와 방명록 등록 폼을 하나의 카드(좌우 2단)로
 * 묶어 보여주고, 등록된 방명록 목록은 카드 바깥 아래쪽에 별도로 표시한다.
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
        <Card
          sx={{
            p: { xs: 3, md: 5 },
            mb: 4,
            borderRadius: 0,
            bgcolor: 'var(--color-bg-sky)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
          }}
        >
          <Grid container spacing={{ xs: 6, md: 8 }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <ContactInfoPanel />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <GuestbookForm onSubmit={addEntry} isSubmitting={isSubmitting} />
            </Grid>
          </Grid>
        </Card>

        <GuestbookList entries={entries} isLoading={isLoading} error={error} />
      </Container>
    </Box>
  );
}

export default ContactSection;
