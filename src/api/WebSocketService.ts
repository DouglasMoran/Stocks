import store from '@store/index';

import { API_KEY, API_WSS_URL } from '@env';
import { updateTrades } from '@store/slices/app/appSlice';

export class WebSocketService {
  private socket: WebSocket;
  private token: string = API_KEY;
  private url: string;
  private messageQueue: string[] = [];
  private isConnected: boolean = false;

  constructor() {
    this.url = `${API_WSS_URL}?token=${this.token}`;
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
    console.log('WebSocket connection opened:', event);
    this.isConnected = true;

    this.messageQueue.forEach((message) => this.socket.send(message));
    this.messageQueue = [];
  };

  private onMessage = (event: MessageEvent) => {
    const dataParsed = JSON.parse(event.data);

    const trade: IWatchTrade = dataParsed;

    store.dispatch(updateTrades(trade));
  };

  private onClose = (event: CloseEvent) => {
    console.log('WebSocket connection closed:', event);
    this.isConnected = false;
    this.reconnect();
  };

  private onError = (event: Event) => {
    console.error('WebSocket error:', event);
    this.isConnected = false;
    this.reconnect();
  };

  private reconnect() {
    console.log('Reconnecting...');
    setTimeout(() => {
      this.initialize();
    }, 5000);
  }

  public subscribe(symbol: string) {
    const message = JSON.stringify({ type: 'subscribe', symbol });
    if (this.isConnected) {
      this.socket.send(message);
    } else {
      this.messageQueue.push(message);
      console.log('WebSocket is not in OPEN state to send data.');
    }
  }

  public unsubscribe(symbol: string) {
    const message = JSON.stringify({ type: 'unsubscribe', symbol });
    if (this.isConnected) {
      this.socket.send(message);
    } else {
      this.messageQueue.push(message);
      console.log('WebSocket is not in OPEN state to send data.');
    }
  }

  public close() {
    this.socket.close();
  }
}
