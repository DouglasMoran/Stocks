import { useEffect, useRef } from 'react';

import { WebSocketService } from '@api/WebSocketService';
import { useDispatch } from 'react-redux';
import { updateTrades } from '@store/slices/app/appSlice';
import { useDebouncedCallback } from 'use-debounce';

// import { useSelector } from 'react-redux';
// import { MainState } from '@store/index';

const useWebSocketService = () => {
  const dispatch = useDispatch();
  const webSocketServiceRef = useRef<WebSocketService | null>(null);

  // const popularStocks = useSelector(
  //   (state: MainState) => state.app.popularStockSymbols,
  // );
  // console.log('POPULAR STOCKS ::: ', popularStocks.length);

  const debouncedUpdateTrades = useDebouncedCallback(
    (trades: IDatumTrade[]) => {
      console.log('PERFORM TO UPDATE TRADES', trades);
      dispatch(updateTrades(trades));
    },
    1000,
  );

  useEffect(() => {
    // if (!webSocketServiceRef.current) {
    const webSocketService = new WebSocketService(debouncedUpdateTrades);
    // }

    // const webSocketService = webSocketServiceRef.current;

    const symbols = ['AAPL', 'BINANCE:BTCUSDT', 'IC MARKETS:1', 'MSFT', 'AMZN'];

    symbols.forEach((symbol) => webSocketService.subscribe(symbol));

    return () => {
      symbols.forEach((symbol) => webSocketService.unsubscribe(symbol));
      webSocketService.close();
    };
  }, []);
};

export default useWebSocketService;
