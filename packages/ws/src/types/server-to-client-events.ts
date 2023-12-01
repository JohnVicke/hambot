export interface ServerToClientEvents {
  executedCommand: (commandName: string) => void;
}
