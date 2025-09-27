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
import type { CardItem } from '../interfaces/home-product-color-list-item.interface';

interface HomeProductColorListItemProps {
  item: CardItem;
}

const HomeProductColorListItem = ({ item }: HomeProductColorListItemProps) => {
  return (
    <Card variant="outlined" sx={{ borderRadius: '8px' }}>
      <CardMedia sx={{ height: 250 }} image={item.imageUrl} />
      <CardContent>
        <Typography component="div">{item.title}</Typography>
        <Typography color="textSecondary">{item.subTitle}</Typography>
      </CardContent>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding={2}
        paddingTop={0}
        gap={2}
      >
        <Typography>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(item.price)}
        </Typography>
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
