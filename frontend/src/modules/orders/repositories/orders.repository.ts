import { api } from '../../../config/config';
import type { PageDTO } from '../../../interfaces/page.interface';
import type { OrderDTO } from '../interfaces/order.dto';

const ordersRepository = () => {
  const getOrders = (page: number, search?: string) => {
    const limit = 20;
    return api.get<PageDTO<OrderDTO>>('/orders', {
      params: {
        limit,
        skip: page * limit,
        orderCode: search,
      },
    });
  };

  return {
    getOrders,
  };
};

export default ordersRepository;
