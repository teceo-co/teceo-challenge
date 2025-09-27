import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import theme from '../../../theme/theme';

const HomeProductColorListItem = () => {
  return (
    <Card variant="outlined" sx={{ borderRadius: '8px' }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://picsum.photos/seed/255/400/400"
        title="green iguana"
      />
      <CardContent>
        <Typography component="div">camiseta básica</Typography>
        <Typography color="textSecondary">cinza</Typography>
      </CardContent>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding={2}
        paddingTop={0}
        gap={2}
      >
        <Typography>R$ 99,90</Typography>
        <IconButton
          size="small"
          sx={{ border: `1px solid ${theme.palette.divider}` }}
        >
          <AddRoundedIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default HomeProductColorListItem;
