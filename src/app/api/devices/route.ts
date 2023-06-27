import {  NextResponse, NextRequest } from "next/server";

import { getDevices, insertDevices, newDeviceType } from '@/app/data/devices';

export async function GET() {
  const result = await getDevices();
  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const dataRaw:newDeviceType = await req.json();
  const insertData = await insertDevices(dataRaw);

  return NextResponse.json(insertData);
}