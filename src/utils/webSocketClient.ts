import { WebSocketClientProps, Emitter } from '../types';
import { WEBSOCKET_RECONNECT_TIMEOUT, WEBSOCKET_MAX_RECONNECT_RETRIES } from '../constants';

export class WebSocketClient {
  private connectionTimeout: NodeJS.Timeout | undefined;
  private websoket: WebSocket | undefined;
  private url: string;
  private emitter: Emitter;
  private retries = 0;

  constructor({ url, emitter }: WebSocketClientProps) {
    this.url = url;
    this.emitter = emitter;
    this.connect();
  }

  private reconnect() {
    if (this.retries >= WEBSOCKET_MAX_RECONNECT_RETRIES) {
      return this.disconnect();
    }
    console.log('Reconnecting to Websocket...');
    this.retries++;
    this.connectionTimeout = setTimeout(() => {
      this.connect();
    }, WEBSOCKET_RECONNECT_TIMEOUT);
  }

  private connect() {
    this.websoket = new WebSocket(this.url);
    this.websoket.onopen = () => {
      console.log('Starting Websocket...');
      if (this.connectionTimeout) clearTimeout(this.connectionTimeout);
    };
    this.websoket.onerror = error => {
      console.error('WebSocket Error:', error);
      this.reconnect();
    };
    this.websoket.onmessage = event => {
      try {
        const log = JSON.parse(event.data);
        if (log) this.emitter(log);
      } catch (error) {
        console.error('Parsing Error: ', error);
      }
    };
  }

  public disconnect() {
    this.retries = 0;
    if (this.websoket) {
      console.log('Websocket connection closed');
      this.websoket.close();
    }
  }
}
