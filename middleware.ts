import { NextResponse, NextRequest } from 'next/server'
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'

type jwtCookie = {
    email: string,
    role: string,
    iat: number,
    exp: number,
}


export function middleware(request: NextRequest) {

    let sessionCookie = request.cookies.get('session')?.value;
    let sessionCookieDecoded = jwt.decode(sessionCookie as string, {
        json: true
    })

    if(!sessionCookie){
        return NextResponse.redirect(new URL('/', request.url))    
    }

    
    if(sessionCookieDecoded?.role as string != 'Administrador' && request.nextUrl.pathname != '/list-devices') {
        return NextResponse.redirect(new URL('/list-devices', request.url)) 
    }

    if(sessionCookieDecoded?.role as string == 'Administrador' && request.nextUrl.pathname == '/list-devices') {
        return NextResponse.redirect(new URL('/dashboard', request.url)) 
    }

    return NextResponse.next()
}
 
export const config = {
    matcher: [
        '/dashboard/:path*',
        '/users/:path*',
        '/devices/:path*',
        '/contracts/:path*',
        '/lines/:path*',
        '/list-devices/:path*'
    ],
}