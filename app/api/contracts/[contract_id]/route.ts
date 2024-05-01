import {  NextResponse, NextRequest } from "next/server";

import { getContractByID } from '@/data/contracts';

export async function GET(req: NextRequest) {
    let contractID = req.url.split("/")[5];
    let resultData = null;
    if(contractID){
         let resultDevice = await getContractByID(contractID);
         resultData = resultDevice;
    }
    return NextResponse.json(resultData);    
}

