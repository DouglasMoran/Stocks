import { useEffect } from 'react';

import { getStockSymbols, getStockProfile } from '@store/slices/app/appThunk';
import { useAppDispatch } from '@store/index';

const useStocks = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStockSymbols());
  }, []);
};

export default useStocks;
