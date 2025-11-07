import theme from '../../../theme/theme';
import { OrderStatus } from '../enums/orderStatus.enum';
import { orderStatusMapper } from '../utils/orderStatus.mapper';

interface OrderStatusDotProps {
  status: OrderStatus;
}

const OrderStatusDot = ({ status }: OrderStatusDotProps) => {
  return (
    <span
      style={{
        backgroundColor: orderStatusMapper[status].backgroundColor,
        minWidth: 8,
        height: 8,
        borderRadius: '100%',
        padding: theme.spacing(1 / 6),
        display: 'block',
      }}
    />
  );
};

export default OrderStatusDot;
