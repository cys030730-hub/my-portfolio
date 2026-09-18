import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { REGION_OPTIONS } from '../../utils/region-options.js';

const INITIAL_FORM = {
  name: '',
  message: '',
  email: '',
  region: '',
  keyword: '',
  rating: 0,
};

const whiteFieldSx = {
  '& .MuiInputBase-input': { color: '#FFFFFF' },
  '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.8)' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#FFFFFF' },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.6)' },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#FFFFFF' },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#FFFFFF' },
  '& .MuiSvgIcon-root': { color: '#FFFFFF' },
};

/**
 * GuestbookForm 컴포넌트
 *
 * Props:
 * @param {function} onSubmit - 방명록 등록 시 실행할 함수. { name, message, email, region, keyword, rating }를 인자로 받고 { success, error }를 반환하는 Promise [Required]
 * @param {boolean} isSubmitting - 등록 요청 진행 중 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <GuestbookForm onSubmit={addEntry} isSubmitting={isSubmitting} />
 */
function GuestbookForm({ onSubmit, isSubmitting = false }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.message.trim()) {
      setFeedback({ type: 'error', text: 'Name and message are required.' });
      return;
    }

    const result = await onSubmit({
      name: form.name.trim(),
      message: form.message.trim(),
      email: form.email.trim(),
      region: form.region,
      keyword: form.keyword.trim(),
      rating: form.rating || null,
    });

    if (result.success) {
      setForm(INITIAL_FORM);
      setFeedback({ type: 'success', text: 'Thanks! Your message has been added to the guestbook.' });
    } else {
      setFeedback({ type: 'error', text: 'Something went wrong. Please try again later.' });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography
        sx={{
          fontSize: { xs: '1.2rem', md: '1.4rem' },
          fontWeight: 700,
          color: '#FFFFFF',
        }}
      >
        Guestbook
      </Typography>

      {feedback && <Alert severity={feedback.type}>{feedback.text}</Alert>}

      <TextField
        label="Name"
        value={form.name}
        onChange={handleChange('name')}
        required
        size="small"
        fullWidth
        sx={whiteFieldSx}
      />

      <TextField
        label="Message"
        value={form.message}
        onChange={handleChange('message')}
        required
        multiline
        minRows={3}
        size="small"
        fullWidth
        sx={whiteFieldSx}
      />

      <TextField
        label="Email (private, optional)"
        type="email"
        value={form.email}
        onChange={handleChange('email')}
        size="small"
        fullWidth
        sx={whiteFieldSx}
      />

      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <TextField
          select
          label="Region (optional)"
          value={form.region}
          onChange={handleChange('region')}
          size="small"
          fullWidth
          sx={whiteFieldSx}
        >
          <MenuItem value="">None</MenuItem>
          {REGION_OPTIONS.map((region) => (
            <MenuItem key={region} value={region}>
              {region}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Keyword (optional)"
          value={form.keyword}
          onChange={handleChange('keyword')}
          size="small"
          fullWidth
          sx={whiteFieldSx}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Typography sx={{ fontSize: '0.9rem', color: '#FFFFFF' }}>
          Rating (optional)
        </Typography>
        <Rating
          value={form.rating}
          onChange={(_event, value) => setForm((prev) => ({ ...prev, rating: value }))}
          sx={{ color: 'var(--color-accent)' }}
        />
      </Box>

      <Button
        type="submit"
        disabled={isSubmitting}
        sx={{
          alignSelf: 'flex-start',
          color: '#FFFFFF',
          bgcolor: 'transparent',
          border: '1px solid #FFFFFF',
          boxShadow: 'none',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            boxShadow: 'none',
          },
        }}
      >
        {isSubmitting ? '등록 중...' : '등록하기'}
      </Button>
    </Box>
  );
}

export default GuestbookForm;
