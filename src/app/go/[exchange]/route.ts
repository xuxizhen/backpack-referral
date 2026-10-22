import { NextResponse } from "next/server";
import { goRedirect } from "@/lib/invites";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ exchange: string }> },
) {
  const { exchange } = await params;
  const target = goRedirect(exchange);
  if (!target) {
    return new NextResponse("Not found", {
      status: 404,
      headers: { "X-Robots-Tag": "noindex" },
    });
  }
  const response = NextResponse.redirect(target.location, target.status);
  response.headers.set("X-Robots-Tag", target.robots);
  response.headers.set("Cache-Control", "no-store");
  return response;
}
