import {
  CircularProgress,
  Grid,
  Paper,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import useOrdersList from '../hooks/useOrdersList';
import { OrderDTO } from '../interfaces/order.dto';
import OrdersListItem from './OrdersListItem';

const OrdersList = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useOrdersList();

  const loaderRef = useInfiniteScroll(
    fetchNextPage,
    !!hasNextPage,
    isFetchingNextPage
  );

  if (status === 'pending') {
    return (
      <Grid container spacing={1}>
        {new Array(16).fill(1).map((_, index: number) => (
          <Grid size={12} key={index}>
            <Skeleton variant="rounded" width="100%" height={30} />
          </Grid>
        ))}
      </Grid>
    );
  }

  if (status === 'error') {
    return <p>error</p>;
  }

  const orders = data.pages.flat();

  return (
    <>
      <TableContainer component={Paper} variant="outlined">
        <Table size="small" aria-label="orders list">
          <TableHead>
            <TableRow>
              <TableCell variant="head">cliente</TableCell>
              <TableCell variant="head">e-mail</TableCell>
              <TableCell variant="head" align="right">
                quantidade de produto-cor
              </TableCell>
              <TableCell variant="head" align="right">
                peças
              </TableCell>
              <TableCell variant="head" align="right">
                total
              </TableCell>
              <TableCell variant="head">status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(order => (
              <OrdersListItem
                key={order.id}
                item={OrderDTO.toListItem(order)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div ref={loaderRef} style={{ height: 1 }} />

      {isFetchingNextPage && (
        <Stack alignItems="center" padding={2} paddingTop={1}>
          <CircularProgress size="24px" />
        </Stack>
      )}
    </>
  );
};

export default OrdersList;
