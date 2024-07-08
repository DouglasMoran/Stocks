import { useEffect } from 'react';

import { getWatchlist } from '@store/slices/app/appThunk';
import { useAppDispatch } from '@store/index';

const useStocks = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWatchlist());
  }, []);

  return {
    onGetWatchlist: getWatchlist,
  };
};

export default useStocks;
