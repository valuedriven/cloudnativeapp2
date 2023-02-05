import { CssBaseline } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
import { menuItems } from '../config/menuItems';
import { defaultTheme } from '../config/theme';
import Body from './Body';
import Header from './Header';

export default function Layout({ children }) {
  const theme = defaultTheme;
  const menuContent = menuItems;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Header menuItems={menuContent} />
        <Body>{children}</Body>
      </Box>
    </ThemeProvider>
  );
}
