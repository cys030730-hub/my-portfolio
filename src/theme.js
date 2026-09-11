import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C5D96B',
      light: '#D9E699',
      dark: '#A8C24F',
      contrastText: '#1A1A1A',
    },
    secondary: {
      main: '#2F5233',
      contrastText: '#F7F8F2',
    },
    warning: {
      main: '#E8A33D',
    },
    background: {
      default: '#F7F8F2',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#4A4A4A',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 500,
    },
  },
  spacing: 8,
});

export default theme;
