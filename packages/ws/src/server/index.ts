import type { Server as HttpServer } from "http";
import { Server } from "socket.io";
import type { ServerOptions } from "socket.io";

import type { ClientToServerEvents } from "../types/client-to-server-events";
import type { Prettify } from "../types/prettify";
import type { ServerToClientEvents } from "../types/server-to-client-events";

type CreateWsServerOptions = Prettify<
  {
    server: HttpServer;
  } & Partial<ServerOptions>
>;

export function createWsServer({
  server,
  ...opts
}: CreateWsServerOptions): Server<ClientToServerEvents, ServerToClientEvents> {
  const io = new Server<ClientToServerEvents, ServerToClientEvents>(
    server,
    opts,
  );

  return io;
}
