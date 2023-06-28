import {  NextResponse, NextRequest } from "next/server";

import { getUsers, insertUsers, newUserType} from '@/data/users';

export async function GET() {
  const result = await getUsers();
  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const dataRaw:newUserType = await req.json();
  const insertData = await insertUsers(dataRaw);

  return NextResponse.json(insertData);
}