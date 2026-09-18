import { describe, expect, it } from "vitest";

import { createLogRecord } from "./logger";

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
