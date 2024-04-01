import {  NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { getDevicesByUser } from '@/data/devices';

export async function GET(req: NextRequest) {
    const getCookies  = cookies().get('session')?.value;
    let sessionCookieDecoded = jwt.decode(getCookies as string, {
        json: true
    });

    const resultDevices = (await getDevicesByUser(sessionCookieDecoded?.id));
    return NextResponse.json({resultDevices});    
}

