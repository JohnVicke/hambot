import pino from "pino";
import pinoPretty from "pino-pretty";

function logStream() {
  return process.env.NODE_ENV !== "development"
    ? undefined
    : pinoPretty({ colorize: true, ignore: "pid,hostname" });
}

function logContext() {
  if (process.env.NODE_ENV === "development") return {};

  return {
    app: "annie",
    version: "0.0.1",
    env: process.env.NODE_ENV,
  };
}

export function createLogger() {
  return pino(logStream()).child(logContext());
}

export type Logger = ReturnType<typeof createLogger>;
