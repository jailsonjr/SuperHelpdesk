import {  NextResponse, NextRequest } from "next/server";

import { getBrands } from '@/data/brands';

export async function GET() {
  const result = await getBrands();
  console.log('ENV' + process.env.NODE_ENV);
  return NextResponse.json(result);
}

