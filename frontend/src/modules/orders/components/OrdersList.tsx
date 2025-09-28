import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { OrderStatus } from '../enums/orderStatus.enum';
import OrdersListItem from './OrdersListItem';

function createData(code: string, customerName: string, total: number, status: OrderStatus) {
  return { code, customerName, total, status };
}

const OrdersList = () => {
  const rows = [
    createData('#1005', 'Carlos da Silva', 120.5, OrderStatus.SENT),
    createData('#1004', 'Maria Silva', 89.9, OrderStatus.DRAFT),
    createData('#1003', 'João Pereira', 230.0, OrderStatus.CANCELED),
    createData('#1002', 'Ana Costa', 450.75, OrderStatus.SENT),
    createData('#1001', 'Pedro Santos', 59.99, OrderStatus.DRAFT),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>código</TableCell>
            <TableCell align="right">cliente</TableCell>
            <TableCell align="right">total</TableCell>
            <TableCell align="right">status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <OrdersListItem item={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersList;
