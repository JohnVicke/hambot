import { io } from "socket.io-client";
import type { ManagerOptions, Socket, SocketOptions } from "socket.io-client";

import type { ClientToServerEvents } from "../types/client-to-server-events";
import type { Prettify } from "../types/prettify";
import type { ServerToClientEvents } from "../types/server-to-client-events";

type CreateWsClientOptions = Prettify<
  {
    url: string;
  } & Partial<ManagerOptions & SocketOptions>
>;

export function createWsClient({
  url,
  ...opts
}: CreateWsClientOptions): Socket<ServerToClientEvents, ClientToServerEvents> {
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    url,
    opts,
  );
  return socket;
}
