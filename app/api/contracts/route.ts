import {  NextResponse, NextRequest } from "next/server";

import { getContracts, insertContract, updateContract, newContractType } from '@/data/contracts';

export async function GET() {
  const resultDevices = await getContracts();
  return NextResponse.json(resultDevices);
}

export async function POST(req: NextRequest) {
  const dataRaw:newContractType = await req.json();
  const insertData = await insertContract(dataRaw);
  return NextResponse.json(insertData);
}

export async function PUT(req: NextRequest) {
  const dataRaw:newContractType = await req.json();
  const updateData = await updateContract(dataRaw);
  return NextResponse.json(updateData);
}