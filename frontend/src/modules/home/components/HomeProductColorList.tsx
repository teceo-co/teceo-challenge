import { CircularProgress, Grid, Skeleton, Stack } from '@mui/material';
import { useInfiniteQuery } from '@tanstack/react-query';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import { ProductColorDTO } from '../interfaces/product-color.dto';
import homeRepository from '../repositories/home.repository';
import HomeProductColorListItem from './HomeProductColorListItem';

const HomeProductColorList = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ['product-colors'],
      queryFn: async ({ pageParam }) => {
        const response = await homeRepository().getProductColors(pageParam);
        return response.data.data;
      },
      getNextPageParam: (lastPage, pages) => {
        if (!lastPage.length) {
          return undefined;
        }

        return pages.length;
      },
      initialPageParam: 0,
    });

  const loaderRef = useInfiniteScroll(
    fetchNextPage,
    !!hasNextPage,
    isFetchingNextPage
  );

  if (status === 'pending') {
    return (
      <Grid container spacing={2}>
        {new Array(8).fill(1).map((_, index: number) => (
          <Grid size={3} key={index}>
            <Skeleton variant="rounded" width="100%" height={300} />
          </Grid>
        ))}
      </Grid>
    );
  }

  if (status === 'error') {
    return <p>error</p>;
  }

  const productColors = data.pages.flat();

  return (
    <>
      <Grid container spacing={2}>
        {productColors.map(productColor => (
          <Grid size={3} key={productColor.id}>
            <HomeProductColorListItem
              item={ProductColorDTO.toCardItem(productColor)}
            />
          </Grid>
        ))}
      </Grid>

      <div ref={loaderRef} style={{ height: 10 }} />

      {isFetchingNextPage && (
        <Stack alignItems="center" padding={2}>
          <CircularProgress size="24px" />
        </Stack>
      )}
    </>
  );
};

export default HomeProductColorList;
