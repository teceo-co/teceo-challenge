import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { useApplicationContext } from '../../global/contexts/ApplicationContext';
import type { OrderStatus } from '../enums/orderStatus.enum';
import type { OrderDTO } from '../interfaces/order.dto';
import ordersRepository from '../repositories/orders.repository';

const useOrdersList = () => {
  const { search, handleLoadingStatus } = useApplicationContext();
  const queryClient = useQueryClient();

  const queryKey = ['orders', search];

  const infiniteQuery = useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam }) => {
      return handleLoadingStatus<OrderDTO[]>({
        disabled: !search?.length,
        requestFn: async () => {
          const response = await ordersRepository().getOrders(
            pageParam,
            search
          );
          return response.data.data;
        },
      });
    },
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.length) {
        return undefined;
      }

      return pages.length;
    },
    initialPageParam: 0,
  });

  const onChangeStatus = async (newStatus: OrderStatus, orderId: string) => {
    queryClient.setQueryData<{ pages: OrderDTO[][] }>(queryKey, oldData => {
      if (!oldData) {
        return oldData;
      }

      return {
        ...oldData,
        pages: oldData?.pages?.map(page =>
          page.map(order =>
            order.id === orderId ? { ...order, status: newStatus } : order
          )
        ),
      };
    });

    try {
      await ordersRepository().updateOrderStatus(orderId, newStatus);
    } catch (err) {
      queryClient.invalidateQueries({ queryKey });
      console.error('Failed to update order status:', err);
    }
  };

  return { ...infiniteQuery, onChangeStatus };
};

export default useOrdersList;
