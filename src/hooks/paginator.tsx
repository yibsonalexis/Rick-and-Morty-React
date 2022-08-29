import { useState, useCallback } from "react";

export const usePaginator = (initialPage: number = 1) => {
  const [page, setPage] = useState<number>(initialPage);
  const nextPage = useCallback(() => setPage((current) => current + 1), []);
  const previousPage = useCallback(() => {
    if (page !== 1) {
      setPage((current) => current - 1);
    }
  }, [page]);

  return { page, nextPage, previousPage };
};
