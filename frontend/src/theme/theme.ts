import { createTheme } from '@mui/material';

export const PRIMARY_COLOR = '#FC6B4B';
export const SECONDARY_COLOR = '#3366FF';
export const PRIMARY_FONT_FAMILY = 'Nunito, sans-serif';
export const SECONDARY_FONT_FAMILY = 'Open Sans, sans-serif';
export const TEXT_PRIMARY_COLOR = '#242424';
export const TEXT_SECONDARY_COLOR = '#97999B';

const theme = createTheme({
  typography: {
    fontFamily: PRIMARY_FONT_FAMILY,
    fontWeightBold: 600,
    h1: {
      fontFamily: PRIMARY_FONT_FAMILY,
      fontSize: '96px',
      fontWeight: 300,
    },
    h2: {
      fontFamily: PRIMARY_FONT_FAMILY,
      fontSize: '34px',
      fontWeight: 400,
    },
    h3: {
      fontFamily: PRIMARY_FONT_FAMILY,
      fontSize: '24px',
      fontWeight: 400,
    },
    h4: {
      fontFamily: PRIMARY_FONT_FAMILY,
      fontSize: '22px',
      fontWeight: 400,
    },
    h5: {
      fontFamily: PRIMARY_FONT_FAMILY,
      fontSize: '20px',
      fontWeight: 400,
    },
    h6: {
      fontFamily: PRIMARY_FONT_FAMILY,
      fontSize: '16px',
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: PRIMARY_FONT_FAMILY,
      fontSize: '14px',
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: SECONDARY_FONT_FAMILY,
      fontSize: '12px',
      fontWeight: 300,
      textTransform: 'uppercase',
    },
    body1: {
      fontFamily: SECONDARY_FONT_FAMILY,
      fontSize: '14px',
      fontWeight: 400,
      letterSpacing: 0.4,
    },
    body2: {
      fontFamily: SECONDARY_FONT_FAMILY,
      fontSize: '12px',
      fontWeight: 400,
      letterSpacing: 0.4,
    },
    caption: {
      fontFamily: PRIMARY_FONT_FAMILY,
      fontSize: '12px',
      fontWeight: 400,
    },
    overline: {
      fontFamily: PRIMARY_FONT_FAMILY,
      fontSize: '12px',
      fontWeight: 400,
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
    button: {
      fontFamily: PRIMARY_FONT_FAMILY,
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        outlined: {
          borderRadius: 12,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '@media (min-width:0px) and (max-width:599.95px)': {
            height: '38px',
          },
          borderRadius: '20px',
          textTransform: 'lowercase',
          color: TEXT_SECONDARY_COLOR,
          borderColor: TEXT_SECONDARY_COLOR,
          boxShadow: 'none !important',
          padding: '6px 16px',
          fontFamily: PRIMARY_FONT_FAMILY,
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: '16px',
          letterSpacing: '0.4px',
          '&:hover': {
            boxShadow: 'none !important',
          },
          backgroundColor: PRIMARY_COLOR,
        },
        contained: {
          color: TEXT_SECONDARY_COLOR,
          fontFamily: PRIMARY_FONT_FAMILY,
          textTransform: 'lowercase',
        },
        containedPrimary: {
          backgroundColor: PRIMARY_COLOR,
          color: 'white',
        },
        containedSecondary: {
          backgroundColor: SECONDARY_COLOR,
          color: 'white',
        },
        containedSizeSmall: {
          padding: '5px 12px',
          borderRadius: '16px',
          fontSize: '13px',
          fontWeight: 600,
          lineHeight: '22px',
          letterSpacing: '0.46px',
        },
        containedSizeLarge: {
          padding: '7px 16px',
          fontSize: '15px',
          fontWeight: 600,
          lineHeight: '26px',
          letterSpacing: '0.46px',
        },
        text: {
          textTransform: 'lowercase',
          fontFamily: PRIMARY_FONT_FAMILY,
          backgroundColor: 'transparent',
          color: TEXT_SECONDARY_COLOR,
          padding: '6px 8px',
        },
        textPrimary: {
          color: PRIMARY_COLOR,
        },
        textSecondary: {
          color: SECONDARY_COLOR,
        },
        textSizeSmall: {
          fontSize: '13px',
          fontWeight: 600,
          lineHeight: '22px',
          letterSpacing: '0.46px',
          padding: '4px 12px',
          borderRadius: '16px',
        },
        textSizeLarge: {
          fontSize: '15px',
          fontWeight: 600,
          lineHeight: '26px',
          letterSpacing: '0.46px',
          padding: '6px 16px',
          borderRadius: '8px',
        },
        sizeSmall: {
          padding: '4px 12px',
          borderRadius: '16px',
          fontSize: '13px',
          fontWeight: 600,
          lineHeight: '22px',
          letterSpacing: '0.46px',
        },
        sizeLarge: {
          '@media (max-width:599.95px)': {
            borderRadius: '8px',
          },
          padding: '8px 16px',
          borderRadius: '32px',
          fontSize: '15px',
          fontWeight: 600,
          lineHeight: '26px',
          letterSpacing: '0.46px',
        },
        iconSizeSmall: {
          fontSize: '20px',
        },
        iconSizeMedium: {
          fontSize: '24px',
        },
        iconSizeLarge: {
          fontSize: '35px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: {
          padding: '3px',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'lowercase',
          color: TEXT_SECONDARY_COLOR,
          borderColor: TEXT_SECONDARY_COLOR,
          padding: '4px 8px',
          borderRadius: 4,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontSize: 13,
          color: TEXT_SECONDARY_COLOR,
        },
      },
    },
  },
  palette: {
    text: {
      primary: TEXT_PRIMARY_COLOR,
      secondary: TEXT_SECONDARY_COLOR,
      disabled: '#00000061',
    },
    mode: 'light',
    secondary: {
      main: SECONDARY_COLOR,
      contrastText: 'white',
    },
    primary: {
      main: PRIMARY_COLOR,
      contrastText: 'white',
    },
    action: {
      active: '#97999B',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFF',
    },
  },
});

export default theme;
