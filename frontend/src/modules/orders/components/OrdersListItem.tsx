import { TableCell, TableRow } from '@mui/material';
import type { ListItem } from '../interfaces/orders-list-item.interface';

interface OrdersListItemProps {
  item: ListItem;
}

const OrdersListItem = ({ item }: OrdersListItemProps) => {
  return (
    <TableRow key={item.code} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {item.code}
      </TableCell>
      <TableCell align="right">{item.customerName}</TableCell>
      <TableCell align="right">{item.total}</TableCell>
      <TableCell align="right">{item.status}</TableCell>
    </TableRow>
  );
};

export default OrdersListItem;
