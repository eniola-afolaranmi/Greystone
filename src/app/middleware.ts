import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/card/:path*", "/senseiCard/:path*"],
};

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;
  console.log("middleware", pathname, origin);
}
