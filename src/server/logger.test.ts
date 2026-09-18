import { describe, expect, it, vi } from "vitest";

import { createLogRecord, writeLog } from "./logger";

describe("createLogRecord", () => {
  it("creates a stable structured record with service and timestamp", () => {
    const record = createLogRecord({
      level: "info",
      event: "health.checked",
      context: { route: "/api/health", status: 200 },
      now: () => new Date("2026-09-18T10:45:00.000Z"),
    });

    expect(record).toEqual({
      timestamp: "2026-09-18T10:45:00.000Z",
      level: "info",
      service: "jobradar-ai",
      event: "health.checked",
      context: { route: "/api/health", status: 200 },
    });
  });

  it("rejects an empty event name", () => {
    expect(() =>
      createLogRecord({
        level: "warn",
        event: "   ",
        now: () => new Date("2026-09-18T10:45:00.000Z"),
      }),
    ).toThrow("Log event must not be empty");
  });
});

describe("writeLog", () => {
  it("writes a JSON warning with structured context", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);

    try {
      writeLog("warn", "source.changed", { company: "Example Co" });

      expect(warn).toHaveBeenCalledOnce();
      const firstCall = warn.mock.calls[0];
      expect(firstCall).toBeDefined();

      const record = JSON.parse(String(firstCall?.[0])) as Record<string, unknown>;
      expect(record).toMatchObject({
        level: "warn",
        service: "jobradar-ai",
        event: "source.changed",
        context: { company: "Example Co" },
      });
      expect(record.timestamp).toEqual(expect.any(String));
    } finally {
      warn.mockRestore();
    }
  });
});
