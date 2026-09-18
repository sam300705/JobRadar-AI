export const runtime = "nodejs";

export function GET(): Response {
  return Response.json(
    {
      status: "ok",
      service: "jobradar-ai",
    },
    {
      status: 200,
      headers: {
        "cache-control": "no-store",
      },
    },
  );
}
