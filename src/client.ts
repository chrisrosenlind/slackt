export class Client {
  ws?: WebSocket = undefined;
  constructor() {
    this.ws = new WebSocket(process.env.URL ?? "");

    this.ws.addEventListener("open", () => {
      console.log("Websocket connection open");
    });
  }
}
