import { API_KEY, API_WSS_URL } from '@env';

export class WebSocketService {
  private socket: WebSocket;
  private token: string = API_KEY;
  private url: string;
  private messageQueue: string[] = [];
  private isConnected: boolean = false;

  private debouncedUpdateTrades: (trades: IDatumTrade[]) => void;

  constructor(debouncedUpdateTrades: (trades: IDatumTrade[]) => void) {
    this.url = `${API_WSS_URL}?token=${this.token}`;
    this.debouncedUpdateTrades = debouncedUpdateTrades;
    this.initialize();
  }

  private initialize() {
    this.socket = new WebSocket(this.url);
    this.socket.addEventListener('open', this.onOpen);
    this.socket.addEventListener('message', this.onMessage);
    this.socket.addEventListener('close', this.onClose);
    this.socket.addEventListener('error', this.onError);
  }

  private onOpen = (event: Event) => {
    this.isConnected = true;

    this.messageQueue.forEach((message) => this.socket.send(message));
    this.messageQueue = [];
  };

  private onMessage = (event: MessageEvent) => {
    if (event.data) {
      const dataParsed = JSON.parse(event.data);

      const trade: IWatchTrade = dataParsed;

      this.debouncedUpdateTrades(trade.data);
    }
  };

  private onClose = (event: CloseEvent) => {
    this.isConnected = false;
    // this.reconnect();
  };

  private onError = (event: Event) => {
    this.isConnected = false;
    // this.reconnect();
  };

  public reconnect() {
    this.initialize();
  }

  public subscribe(symbol: string) {
    const message = JSON.stringify({ type: 'subscribe', symbol });
    if (this.isConnected) {
      this.socket.send(message);
    } else {
      this.messageQueue.push(message);
    }
  }

  public unsubscribe(symbol: string) {
    const message = JSON.stringify({ type: 'unsubscribe', symbol });
    if (this.isConnected) {
      this.socket.send(message);
    } else {
      this.messageQueue.push(message);
    }
  }

  public close() {
    this.socket.close();
  }
}
