import {  NextResponse } from "next/server";

import { getUsers } from '@/data/users';
import { getDeviceByType, getDevices } from '@/data/devices';

export async function GET() {
  const resultUsers = (await getUsers()).length;
  const resultDevices = (await getDevices()).length;
  const resultDesktops = (await getDeviceByType("desktop")).length;
  const resultNotebook = (await getDeviceByType("notebook")).length;
  const resultMonitores = (await getDeviceByType("monitor")).length;
  const resultTeclados = (await getDeviceByType("teclado")).length;

  return NextResponse.json({
    users: resultUsers,
    devices: resultDevices,
    desktops: resultDesktops,
    notebooks: resultNotebook,
    monitores: resultMonitores,
    teclados: resultTeclados,
  });
}

