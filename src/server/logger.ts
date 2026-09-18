export type LogLevel = "info" | "warn" | "error";
export type LogContextValue = string | number | boolean | null;
export type LogContext = Readonly<Record<string, LogContextValue>>;

export type CreateLogRecordInput = Readonly<{
  level: LogLevel;
  event: string;
  context?: LogContext;
  now?: () => Date;
}>;

export type LogRecord = Readonly<{
  timestamp: string;
  level: LogLevel;
  service: "jobradar-ai";
  event: string;
  context?: LogContext;
}>;

export function createLogRecord({
  level,
  event,
  context,
  now = () => new Date(),
}: CreateLogRecordInput): LogRecord {
  const normalizedEvent = event.trim();

  if (normalizedEvent.length === 0) {
    throw new Error("Log event must not be empty");
  }

  return {
    timestamp: now().toISOString(),
    level,
    service: "jobradar-ai",
    event: normalizedEvent,
    ...(context ? { context } : {}),
  };
}
