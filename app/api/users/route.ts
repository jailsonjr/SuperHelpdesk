import {  NextResponse, NextRequest } from "next/server";

import { getUsers, insertUsers, newUserType, updateUser} from '../../../data/users';

export async function GET() {
  const result = await getUsers();
  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const dataRaw:newUserType = await req.json();
  const insertData = await insertUsers(dataRaw);

  return NextResponse.json(insertData);
}

export async function PUT(req: NextRequest) {
  const dataRaw:newUserType = await req.json();
  const updateData = await updateUser(dataRaw);
  return NextResponse.json(updateData);
}