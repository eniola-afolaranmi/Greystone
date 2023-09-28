import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { useSearchParams } from "next/navigation";

// export const config = {
//   matcher: ["/card/:path*", "/senseiCard/:path*"],
// };

function GetName() {
  const searchParams = useSearchParams();
  return searchParams.get("ninjaName");
}

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  const name: any = GetName();
  requestHeaders.set("ninja", name);
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });
  return response;
}
