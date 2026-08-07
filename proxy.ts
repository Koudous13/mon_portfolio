import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export async function proxy(request: NextRequest) {
  // Prevent infinite loop
  if (request.headers.has('x-middleware-bypass')) {
    return NextResponse.next();
  }

  // AD-4: Logique d'injection GEO-SEO dynamique via Vercel Edge Middleware
  const reqAny = request as any;
  const city = reqAny.geo?.city || request.headers.get('x-vercel-ip-city') || 'full-remote';
  const locationText = city === 'full-remote' ? 'Disponible en full-remote' : `Disponible à ${city}`;
  console.log('MIDDLEWARE RUNNING, CITY:', city);

  // Fetch the actual page
  const bypassHeaders = new Headers(request.headers);
  bypassHeaders.set('x-middleware-bypass', '1');
  
  const response = await fetch(request.url, {
    headers: bypassHeaders
  });
  
  // Only rewrite HTML responses
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('text/html')) {
    let html = await response.text();
    html = html.replace('<!-- GEO_PLACEHOLDER -->', locationText);
    
    const newHeaders = new Headers(response.headers);
    newHeaders.delete('content-length'); // Remove content-length since we modified the body

    return new NextResponse(html, { 
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders 
    });
  }
  
  return response;
}
