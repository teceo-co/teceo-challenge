import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import {
  Box,
  ButtonBase,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { TCO_LOGO } from '../../../constants/images.constants';
import { TEXT_PRIMARY_COLOR } from '../../../theme/theme';

const GlobalUserConfig = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGoToOrders = () => {
    handleClose();
    navigate('/orders');
  };

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleGoToOrders}>
          <Stack direction="row" spacing={2} width={120} alignItems="center">
            <ChecklistRoundedIcon sx={{ color: TEXT_PRIMARY_COLOR }} />
            <Typography color="textPrimary">pedidos</Typography>
          </Stack>
        </MenuItem>
      </Menu>
      <Box gap={2} display="flex" alignItems="center">
        <IconButton>
          <NotificationsRoundedIcon sx={{ color: '#424242' }} />
        </IconButton>
        <ButtonBase sx={{ textAlign: 'left' }} onClick={handleClick}>
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
    </>
  );
};

export default GlobalUserConfig;
