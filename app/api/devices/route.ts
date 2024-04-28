import {  NextResponse, NextRequest } from "next/server";

import { getDevices, insertDevices, newDeviceType, updateDevice } from '@/data/devices';

export async function GET() {
  const resultDevices = await getDevices();
  return NextResponse.json(resultDevices);
}

export async function POST(req: NextRequest) {
  const dataRaw:newDeviceType = await req.json();
  const insertData = await insertDevices(dataRaw);
  return NextResponse.json(insertData);
}

export async function PUT(req: NextRequest) {
  const dataRaw:newDeviceType = await req.json();
  const updateData = await updateDevice(dataRaw);
  return NextResponse.json(updateData);
}