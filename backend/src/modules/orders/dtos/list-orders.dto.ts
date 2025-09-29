import Customer from '../../customers/customers.model';

export interface ListOrdersDTO {
  id: string;
  customer: Customer;
  status: string;
  totalValue: number;
  totalQuantity: number;
  totalProductColors: number;
  averageValuePerUnit: number;
  averageValuePerProductColor: number;
}
