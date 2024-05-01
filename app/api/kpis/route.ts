import {  NextResponse } from "next/server";

import { getUsers } from '@/data/users';
import { getDeviceByType, getDevices } from '@/data/devices';
import { getContracts } from '@/data/contracts';

export async function GET() {
  const resultUsers = (await getUsers()).length;
  const resultDevices = (await getDevices()).length;
  const resultContracts = (await getContracts()).length;
  const resultDesktops = (await getDeviceByType("desktop")).length;
  const resultNotebook = (await getDeviceByType("notebook")).length;
  const resultMonitores = (await getDeviceByType("monitor")).length;
  const resultTeclados = (await getDeviceByType("teclado")).length;

  return NextResponse.json({
    users: resultUsers,
    devices: resultDevices,
    contracts: resultContracts,
    desktops: resultDesktops,
    notebooks: resultNotebook,
    monitores: resultMonitores,
    teclados: resultTeclados,
  });
}

