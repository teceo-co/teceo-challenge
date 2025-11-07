import { BaseDTO } from '../../../interfaces/base.dto';
import type { OrderStatus } from '../enums/orderStatus.enum';
import type { ListItem } from './orders-list-item.interface';

interface Customer {
  id: string;
  name: string;
  email: string;
}

export class OrderDTO extends BaseDTO<OrderDTO> {
  id: string;
  code: string;
  status: OrderStatus;
  customer: Customer;
  totalProductColors: number;
  totalQuantity: number;
  totalValue: number;
  averageValuePerUnit: number;
  averageValuePerProductColor: number;

  static toListItem(dto: OrderDTO): ListItem {
    return {
      id: dto.id,
      code: dto.code,
      totalProductColors: dto.totalProductColors,
      totalQuantity: dto.totalQuantity,
      totalValue: dto.totalValue,
      status: dto.status,
      customerName: dto.customer.name,
      customerEmail: dto.customer.email,
      averageValuePerUnit: dto.averageValuePerUnit,
      averageValuePerProductColor: dto.averageValuePerProductColor,
    };
  }
}
