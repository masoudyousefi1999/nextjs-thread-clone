import { NextResponse, NextRequest, NextFetchEvent } from "next/server";

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const { pathname } = req.nextUrl;
  const basePath = req.nextUrl.origin;
  const token = req.cookies.get("token")?.value;
  if (pathname === "/") {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    event.waitUntil(
      fetch(`${basePath}/api/auth/me`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      }).then((res) => {
        if (res.status == 200) {
          return NextResponse.next();
        } else {
          return NextResponse.redirect(new URL("/login", req.url));
        }
      })
    );
  } else if (pathname == "/login" || pathname == "/singup") {
    if (!token) {
      return NextResponse.next();
    }
    const res = await fetch(`${basePath}/api/auth/me`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    if (res.status !== 200) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/", req.url));
  }
}
