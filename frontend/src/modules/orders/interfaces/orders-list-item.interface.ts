import type { OrderStatus } from '../enums/orderStatus.enum';

export interface ListItem {
  id: string;
  code: string;
  customerName: string;
  customerEmail: string;
  status: OrderStatus;
  totalProductColors: number;
  totalQuantity: number;
  totalValue: number;
  averageValuePerUnit: number;
  averageValuePerProductColor: number;
}
