import {  NextResponse, NextRequest } from "next/server";

import { getBrands } from '@/data/brands';

export async function GET() {
  const result = await getBrands();
  return NextResponse.json(result);
}

