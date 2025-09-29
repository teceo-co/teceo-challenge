import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../theme/theme';

export const coolToggledAnimation = {
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    padding: '2px',
    zIndex: 1,
    pointerEvents: 'none',
    background: `linear-gradient(90deg, ${PRIMARY_COLOR}, ${SECONDARY_COLOR}, ${PRIMARY_COLOR})`,
    backgroundSize: '200% 200%',
    animation: 'moveGradient 2s linear infinite',
    WebkitMask:
      'linear-gradient(#fff, #fff) content-box, linear-gradient(#fff,#fff)',
    WebkitMaskComposite: 'xor',
    mask: 'linear-gradient(#fff, #fff) content-box, linear-gradient(#fff,#fff)',
    maskComposite: 'exclude',
  },
  '@keyframes moveGradient': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '100%': {
      backgroundPosition: '200% 50%',
    },
  },
};
