import { useEffect } from 'react';

import { WebSocketService } from '@api/WebSocketService';

const useWebSocketService = () => {
  useEffect(() => {
    const webSocketService = new WebSocketService();

    const symbols = [
      'AAPL',
      'BINANCE:BTCUSDT',
      'IC MARKETS:1',
      'EXCOF',
      'UPOW',
      'HLNFF',
      'PRKWF',
    ];

    symbols.forEach((symbol) => webSocketService.subscribe(symbol));

    return () => {
      symbols.forEach((symbol) => webSocketService.unsubscribe(symbol));
      webSocketService.close();
    };
  }, []);
};

export default useWebSocketService;
