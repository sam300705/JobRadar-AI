import { describe, expect, it } from "vitest";

import { parseServerEnv } from "./env";

describe("parseServerEnv", () => {
  it("rejects an invalid NODE_ENV", () => {
    expect(() =>
      parseServerEnv({
        NODE_ENV: "preview",
      }),
    ).toThrow();
  });

  it.each(["development", "test", "production"] as const)(
    "accepts NODE_ENV=%s",
    (nodeEnv) => {
      expect(
        parseServerEnv({
          NODE_ENV: nodeEnv,
        }).NODE_ENV,
      ).toBe(nodeEnv);
    },
  );

  it("accepts a valid optional APP_URL", () => {
    expect(
      parseServerEnv({
        NODE_ENV: "test",
        APP_URL: "https://jobradar.example",
      }).APP_URL,
    ).toBe("https://jobradar.example/");
  });
});
