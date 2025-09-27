import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { Box, ButtonBase, IconButton, Stack, Typography } from '@mui/material';
import { TCO_LOGO } from '../../../constants/images.constants';

const GlobalUserConfig = () => {
  return (
    <Box gap={2} display="flex" alignItems="center">
      <IconButton>
        <NotificationsRoundedIcon sx={{ color: '#424242' }} />
      </IconButton>
      <ButtonBase sx={{ textAlign: 'left' }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <img
            src={TCO_LOGO}
            alt="Reserva"
            style={{
              border: '1px solid #e0e0e0',
              borderRadius: '100%',
              width: '28px',
              height: '28px',
              objectFit: 'contain',
            }}
          />
          <div>
            <Typography lineHeight={1} fontSize="14px" color="textSecondary">
              olá,
            </Typography>
            <Typography fontSize="14px" color="textPrimary">
              tco
            </Typography>
          </div>
        </Stack>
      </ButtonBase>
    </Box>
  );
};

export default GlobalUserConfig;
