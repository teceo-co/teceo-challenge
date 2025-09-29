import { OrderStatus } from '../enums/orderStatus.enum';

interface OrderStatusInfo {
  backgroundColor: string;
  label: string;
}

export const orderStatusMapper: Record<OrderStatus, OrderStatusInfo> = {
  [OrderStatus.CANCELED]: {
    backgroundColor: '#212121',
    label: 'cancelado',
  },
  [OrderStatus.DRAFT]: {
    backgroundColor: '#e0e0e0',
    label: 'rascunho',
  },
  [OrderStatus.SENT]: {
    backgroundColor: '#00c853',
    label: 'enviado',
  },
};
