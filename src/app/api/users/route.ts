import {  NextResponse, NextRequest } from "next/server";

import { getUsers} from '@/app/data/users';

export async function GET() {
  const result = await getUsers();
  return NextResponse.json(result);
}