import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import CircularProgress from '@mui/material/CircularProgress';

/**
 * GuestbookList 컴포넌트
 *
 * Props:
 * @param {Array} entries - 방명록 항목 배열 [id, name, message, region, keyword, rating, created_at] [Required]
 * @param {boolean} isLoading - 목록 조회 진행 중 여부 [Optional, 기본값: false]
 * @param {string} error - 조회 실패 시 에러 메시지 [Optional, 기본값: null]
 *
 * Example usage:
 * <GuestbookList entries={entries} isLoading={isLoading} error={error} />
 */
function GuestbookList({ entries, isLoading = false, error = null }) {
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
        <CircularProgress size={24} sx={{ color: 'var(--color-secondary)' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography sx={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
        Failed to load the guestbook.
      </Typography>
    );
  }

  if (entries.length === 0) {
    return (
      <Typography sx={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
        No entries yet. Be the first to leave a message!
      </Typography>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxHeight: 320, overflowY: 'auto' }}>
      {entries.map((entry) => (
        <Box
          key={entry.id}
          sx={{
            p: 2,
            border: '1px solid var(--color-border-light)',
            borderRadius: 1,
            bgcolor: 'var(--color-bg-primary)',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
            <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
              {entry.name}
              {entry.region ? ` · ${entry.region}` : ''}
            </Typography>
            {entry.rating && (
              <Rating value={entry.rating} readOnly size="small" sx={{ color: 'var(--color-accent)' }} />
            )}
          </Box>
          <Box sx={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            {entry.message}
          </Box>
          {entry.keyword && (
            <Typography sx={{ mt: 0.5, fontSize: '0.8rem', color: 'var(--color-secondary)' }}>
              #{entry.keyword}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}

export default GuestbookList;
