"use client";

export default function ErrorPage({
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  return (
    <main className="errorShell">
      <section className="errorCard" aria-labelledby="error-title">
        <p className="eyebrow">Temporary problem</p>
        <h1 id="error-title">This view could not be loaded.</h1>
        <p className="lede">
          JobRadar did not replace the failed request with guessed data. Try the
          request again.
        </p>
        <button type="button" onClick={reset}>
          Try again
        </button>
      </section>
    </main>
  );
}
