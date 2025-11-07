import { useEffect, useRef } from 'react';

const useInfiniteScroll = (
  onLoadMore: () => void,
  hasNextPage: boolean,
  isFetchingNextPage: boolean,
) => {
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasNextPage && !isFetchingNextPage) {
          onLoadMore();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(loader);

    return () => {
      if (loader) {
        observer.unobserve(loader);
      }
    };
  }, [onLoadMore, hasNextPage, isFetchingNextPage]);

  return loaderRef;
};

export default useInfiniteScroll;
