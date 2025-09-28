import { useInfiniteQuery } from '@tanstack/react-query';
import { useApplicationContext } from '../../global/contexts/ApplicationContext';
import type { OrderDTO } from '../interfaces/order.dto';
import ordersRepository from '../repositories/orders.repository';

const useOrdersList = () => {
  const { search, handleLoadingStatus } = useApplicationContext();

  const infiniteQuery = useInfiniteQuery({
    queryKey: ['orders', search],
    queryFn: async ({ pageParam }) => {
      return handleLoadingStatus<OrderDTO[]>({
        disabled: !search?.length,
        requestFn: async () => {
          const response = await ordersRepository().getOrders(pageParam, search);
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

  return infiniteQuery;
};

export default useOrdersList;
