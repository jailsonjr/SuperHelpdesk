import {  NextResponse } from "next/server";

import { getUsers } from '../../../data/users';

import { getDevices } from '../../../data/devices';

export async function GET() {
  const resultUsers = (await getUsers()).length;
  const resultDevices = (await getDevices()).length;
  return NextResponse.json({
    users: resultUsers,
    devices: resultDevices
  });
}

