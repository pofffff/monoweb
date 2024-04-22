import {
  NextRequest, NextResponse,
} from 'next/server';

import { contentSecurityPolicy } from '@shared/config';

export async function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const cspHeaders = contentSecurityPolicy(nonce);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  requestHeaders.set('Content-Security-Policy', cspHeaders);

  NextResponse.next({ request: { headers: requestHeaders } }).headers.set(
    'Content-Security-Policy',
    cspHeaders,
  );

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - assets (asset fallbacks)
     * - robots.txt
     * - favicon.ico (favicon file)
     * - favicon-16x16.png (favicon file)
     * - favicon-32x32.png (favicon file)
     * - apple-touch-icon.png (favicon file)
     * - site.webmanifest (web app manifest)
     */
    '/((?!api|_next/static|_next/image|assets|robots.txt|favicon.ico|favicon-16x16.png|favicon-32x32.png|apple-touch-icon.png|site.webmanifest).*)',
  ],
};
