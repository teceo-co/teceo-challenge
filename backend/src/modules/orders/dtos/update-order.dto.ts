import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus } from '../enums/order-status.enum';

export default class UpdateOrderDTO {
  @IsOptional()
  @IsEnum(OrderStatus)
  status: OrderStatus;
}
