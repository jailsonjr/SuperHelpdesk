
import {  NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
    cookies().delete('session');
    return NextResponse.json({
      message: 'Cookie Destroyed'
    })
  }

