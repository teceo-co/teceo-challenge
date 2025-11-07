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
  Typography,
} from '@mui/material';
import { useMemo } from 'react';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import useOrdersList from '../hooks/useOrdersList';
import { OrderDTO } from '../interfaces/order.dto';
import OrdersListItem from './OrdersListItem';

const OrdersList = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    onChangeStatus,
    toggleOrderId,
    selectedOrderIds,
  } = useOrdersList();

  const orders = useMemo(
    () => data?.pages.flat() || ([] as OrderDTO[]),
    [data?.pages]
  );

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

  return (
    <>
      <TableContainer component={Paper} variant="outlined">
        <Table size="small" aria-label="orders list">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" />
              <TableCell variant="head">
                <Typography>cliente</Typography>
              </TableCell>
              <TableCell variant="head">
                <Typography>e-mail</Typography>
              </TableCell>
              <TableCell variant="head" align="right">
                <Typography>quantidade de produto-cor</Typography>
              </TableCell>
              <TableCell variant="head" align="right">
                <Typography>peças</Typography>
              </TableCell>
              <TableCell variant="head" align="right">
                <Typography>total</Typography>
              </TableCell>
              <TableCell variant="head" align="right">
                <Typography>valor médio por produto-cor</Typography>
              </TableCell>
              <TableCell variant="head" align="right">
                <Typography>valor médio por peça</Typography>
              </TableCell>
              <TableCell variant="head">
                <Typography>status</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(order => (
              <OrdersListItem
                key={order.id}
                item={OrderDTO.toListItem(order)}
                onToggle={toggleOrderId}
                isToggled={selectedOrderIds.includes(order.id)}
                onChangeStatus={newStatus =>
                  onChangeStatus(newStatus, order.id)
                }
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
