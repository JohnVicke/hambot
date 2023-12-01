import http from "http";

export function hambotHttpServer() {
  const server = http.createServer((req, res) => {
    if (req.url === "/healthcheck") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      return res.end("Im alive");
    }
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("ok");
  });

  return {
    get instance() {
      return server;
    },
    start: (port: number, cb?: () => void) => {
      server.listen(port).on("listening", () => cb?.());
    },
  };
}
