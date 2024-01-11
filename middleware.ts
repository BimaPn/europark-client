import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest, event: NextFetchEvent) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;

  if (req.nextUrl.pathname.startsWith('/dashboard') && !isAuthenticated) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }
  if (req.nextUrl.pathname.startsWith('/admin/login') && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }
  if (req.nextUrl.pathname.startsWith('/') && !isAuthenticated) {
    return NextResponse.next();
  }


  const authMiddleware = await withAuth({
    pages: {
      signIn: `/admin/login`,
    },
  });

  // @ts-expect-error
  return authMiddleware(req, event);
}
