import type { OrderStatus } from '../enums/orderStatus.enum';

export interface ListItem {
  code: string;
  customerName: string;
  total: number;
  status: OrderStatus;
}
