import { Container, Stack, Typography } from '@mui/material';
import OrdersList from './components/OrdersList';

const OrdersPage = () => {
  return (
    <Stack marginTop={8} paddingTop={1} spacing={2}>
      <Container maxWidth="lg">
        <Typography gutterBottom variant="h3">
          pedidos
        </Typography>
        <OrdersList />
      </Container>
    </Stack>
  );
};

export default OrdersPage;
