import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import theme from '../../theme/theme';
import GlobalLogo from './components/GlobalLogo';
import GlobalSearch from './components/GlobalSearch';
import GlobalUserConfig from './components/GlobalUserConfig';

const GlobalAppBar = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: 'white',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
      elevation={0}
      position="fixed"
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <GlobalLogo />
        <GlobalSearch />
        <GlobalUserConfig />
      </Toolbar>
    </AppBar>
  );
};

export default GlobalAppBar;
