import { Grid } from '@mui/material';
import { useInfiniteQuery } from '@tanstack/react-query';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import homeRepository from '../repositories/home.repository';
import HomeProductColorListItem from './HomeProductColorListItem';

const HomeProductColorList = () => {
  const fetchProjects = async ({ pageParam = 0 }) => {
    const response = await homeRepository().getProductColors();
    return Promise.resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    getNextPageParam: (lastPage, pages) =>
      pages.length < 5 ? pages.length : undefined,
    initialPageParam: 0,
  });

  const loaderRef = useInfiniteScroll(
    fetchNextPage,
    !!hasNextPage,
    isFetchingNextPage
  );

  if (status === 'pending') {
    return <p>carregando...</p>;
  }

  if (status === 'error') {
    return <p>error</p>;
  }

  const productColors = data.pages.flat();

  return (
    <>
      <Grid container spacing={2}>
        {productColors.map(productColor => (
          <Grid size={3}>
            <HomeProductColorListItem />
          </Grid>
        ))}
      </Grid>

      <div ref={loaderRef} style={{ height: 10 }} />

      {isFetchingNextPage && <p>Loading more…</p>}
    </>
  );
};

export default HomeProductColorList;
