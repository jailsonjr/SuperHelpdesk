import {  NextResponse, NextRequest } from "next/server";

import { getDeviceByID } from '@/data/devices';
import { getUserByID } from '@/data/users';

export async function GET(req: NextRequest) {
    let deviceID = req.url.split("/")[5];
    let resultData = null;
    if(deviceID){
         let resultDevice = await getDeviceByID(deviceID);

         if(resultDevice?.user_id){
            let user = await getUserByID(resultDevice?.user_id as string);

            resultData = {...resultDevice, user_details: {
               user_id: user?.user_id,
               user_email: user?.user_email,
               user_name: user?.user_name
            }}
         } else {
            resultData = resultDevice;
         }

    }
    return NextResponse.json(resultData);    
}

