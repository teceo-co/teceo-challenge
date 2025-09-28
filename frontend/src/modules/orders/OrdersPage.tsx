import {
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

enum OrderStatus {
  DRAFT = 'DRAFT',
  CANCELED = 'CANCELED',
  SENT = 'SENT',
}

function createData(
  code: string,
  customerName: string,
  total: number,
  status: OrderStatus
) {
  return { code, customerName, total, status };
}

const OrdersPage = () => {
  const rows = [
    createData('#1005', 'Carlos da Silva', 120.5, OrderStatus.SENT),
    createData('#1004', 'Maria Silva', 89.9, OrderStatus.DRAFT),
    createData('#1003', 'João Pereira', 230.0, OrderStatus.CANCELED),
    createData('#1002', 'Ana Costa', 450.75, OrderStatus.SENT),
    createData('#1001', 'Pedro Santos', 59.99, OrderStatus.DRAFT),
  ];

  return (
    <Stack marginTop={8} paddingTop={1} spacing={2}>
      <Container maxWidth="lg">
        <Typography gutterBottom variant="h3">
          pedidos
        </Typography>
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
              {rows.map(row => (
                <TableRow
                  key={row.code}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.code}
                  </TableCell>
                  <TableCell align="right">{row.customerName}</TableCell>
                  <TableCell align="right">{row.total}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Stack>
  );
};

export default OrdersPage;
