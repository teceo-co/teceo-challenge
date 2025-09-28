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
  createdAt: string;
  updatedAt: string;
  code: string;
  total: number;
  status: OrderStatus;
  customer: Customer;

  static toListItem(dto: OrderDTO): ListItem {
    return {
      id: dto.id,
      code: dto.code,
      total: dto.total,
      status: dto.status,
      customerName: dto.customer.name,
    };
  }
}
