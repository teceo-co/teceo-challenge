import type { OrderStatus } from '../enums/orderStatus.enum';

export interface ListItem {
  id: string;
  code: string;
  customerName: string;
  total: number;
  status: OrderStatus;
}
