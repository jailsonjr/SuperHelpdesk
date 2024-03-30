import {  NextResponse, NextRequest } from "next/server";

import { getDevices, insertDevices, newDeviceType } from '../../../data/devices';

export async function GET() {
  const result = await getDevices();
  console.log('ENV' + process.env.NODE_ENV);
  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const dataRaw:newDeviceType = await req.json();
  const insertData = await insertDevices(dataRaw);

  return NextResponse.json(insertData);
}