import { Container, Stack, Typography } from '@mui/material';
import OrdersList from './components/OrdersList';

const OrdersPage = () => {
  return (
    <Stack alignItems="center" marginTop={8} paddingTop={1} spacing={2}>
      <Container maxWidth="lg">
        <Stack spacing={1}>
          <Typography color="textPrimary" gutterBottom variant="h5">
            pedidos
          </Typography>
          <OrdersList />
        </Stack>
      </Container>
    </Stack>
  );
};

export default OrdersPage;
