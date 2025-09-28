import { useInfiniteQuery } from '@tanstack/react-query';
import { useApplicationContext } from '../../global/contexts/ApplicationContext';
import type { ProductColorDTO } from '../interfaces/product-color.dto';
import homeRepository from '../repositories/home.repository';

const useHomeProductColorList = () => {
  const { search, handleLoadingStatus } = useApplicationContext();

  const infiniteQuery = useInfiniteQuery({
    queryKey: ['product-colors', search],
    queryFn: async ({ pageParam }) => {
      return handleLoadingStatus<ProductColorDTO[]>({
        requestFn: async () => {
          const response = await homeRepository().getProductColors(
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

  return infiniteQuery;
};

export default useHomeProductColorList;
