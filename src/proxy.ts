import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { canonicalLocation } from "@/lib/redirects";
export function proxy(request: NextRequest) {
  const location = canonicalLocation(
    request.headers.get("host"),
    request.nextUrl.pathname,
    request.nextUrl.search,
  );
  if (!location) return NextResponse.next();
  return NextResponse.redirect(location, 301);
}
export const config = {
  matcher: ["/", "/((?!_next/static|_next/image).*)"],
};
