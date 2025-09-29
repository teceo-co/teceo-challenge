import { api } from '../../../config/config';
import type { PageDTO } from '../../../interfaces/page.interface';
import type { OrderStatus } from '../enums/orderStatus.enum';
import type { OrderDTO } from '../interfaces/order.dto';

const ordersRepository = () => {
  const getOrders = (page: number, search?: string) => {
    const limit = 200;
    return api.get<PageDTO<OrderDTO>>('/orders', {
      params: {
        limit,
        skip: page * limit,
        orderCode: search,
      },
    });
  };

  const updateOrderStatus = async (
    orderId: string,
    orderStatus: OrderStatus
  ): Promise<void> => {
    await api.patch(`/orders/${orderId}`, { status: orderStatus });
  };

  return {
    getOrders,
    updateOrderStatus,
  };
};

export default ordersRepository;
