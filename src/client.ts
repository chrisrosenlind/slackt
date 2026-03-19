export class Client {
  private ws?: WebSocket;

  constructor() {
    const url = process.env.URL;
    if (!url) {
      throw new Error("Missing WebSocket url");
    }

    this.ws = new WebSocket(url);

    this.ws.addEventListener("open", () => {
      console.log("WebSocket connection open");
    });

    this.ws.addEventListener("message", (event) => {
      console.log("Received: ", event.data);
    });

    this.ws.addEventListener("close", () => {
      console.log("WebSocket connection closed");
    });

    this.ws.addEventListener("error", (err) => {
      console.error("WebSocket error", err);
    });
  }

  close() {
    this.ws?.close();
    this.ws = undefined;
  }
}
