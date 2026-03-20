type ClientProps = {
  token: string;
  url: string;
};

export class Client {
  private ws?: WebSocket;
  private url: string;
  private token: string;

  constructor({ token, url }: ClientProps) {
    if (!url) throw new Error("Missing WebSocket url");
    if (!token) throw new Error("Missing Slack token");

    this.token = token;
    this.url = url;
  }

  connect() {
    this.ws = new WebSocket(this.url, this.token);

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
