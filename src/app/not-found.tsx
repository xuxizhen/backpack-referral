import Link from "next/link";
export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <main className="container article-page">
          <h1>Page not found.</h1>
          <p>This guide may have moved.</p>
          <Link className="button" href="/en">
            Go to FeeLens
          </Link>
        </main>
      </body>
    </html>
  );
}
