import { Stack, TableCell, TableRow, Typography } from '@mui/material';
import useMoney from '../../../hooks/useMoney';
import type { ListItem } from '../interfaces/orders-list-item.interface';
import { orderStatusMapper } from '../utils/orderStatus.mapper';
import OrderStatusDot from './OrderStatusDot';

interface OrdersListItemProps {
  item: ListItem;
}

const OrdersListItem = ({ item }: OrdersListItemProps) => {
  const { format } = useMoney();

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {item.customerName}
      </TableCell>
      <TableCell>{item.customerEmail}</TableCell>
      <TableCell align="right">{item.totalProductColors}</TableCell>
      <TableCell align="right">{item.totalQuantity}</TableCell>
      <TableCell align="right">{format(item.totalValue)}</TableCell>
      <TableCell>
        <Stack direction="row" alignItems="center" spacing={1}>
          <OrderStatusDot status={item.status} />
          <Typography variant="body2">
            {orderStatusMapper[item.status].label}
          </Typography>
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export default OrdersListItem;
