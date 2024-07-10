import { useRef, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';

import { setWebSocketRef, updateTrades } from '@store/slices/app/appSlice';

import { WebSocketService } from '@api/WebSocketService';

import { MainState } from '@store/index';

const useWebSocketService = () => {
  const dispatch = useDispatch();
  const webSocketServiceRef = useRef<WebSocketService | null>(null);

  const popularStockSymbols = useSelector(
    (state: MainState) => state.app.popularStockSymbols,
  );
  const symbolWatches = useSelector(
    (state: MainState) => state.app.symbolWatches,
  );

  const debouncedUpdateTrades = useDebouncedCallback(
    (trades: IDatumTrade[]) => {
      dispatch(updateTrades(trades));
    },
    1000,
  );

  useEffect(() => {
    webSocketServiceRef.current = new WebSocketService(debouncedUpdateTrades);

    dispatch(setWebSocketRef(webSocketServiceRef.current));

    const webSocketService = webSocketServiceRef.current;

    const watcheslist = [...popularStockSymbols, ...symbolWatches];
    console.log('WATCHESLIST ::: ::: ', watcheslist.length);
    watcheslist.forEach((symbol) => webSocketService.subscribe(symbol));

    return () => {
      watcheslist.forEach((symbol) =>
        webSocketServiceRef.current?.unsubscribe(symbol),
      );
      webSocketServiceRef.current?.close();
    };
  }, [symbolWatches]);
};

export default useWebSocketService;
