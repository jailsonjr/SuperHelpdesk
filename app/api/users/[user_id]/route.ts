import {  NextResponse, NextRequest } from "next/server";

import { getUserByID} from '../../../../data/users';

export async function GET(req: NextRequest) {
    let userID = req.url.split("/")[5];
    let resultData = null;
    if(userID){
         resultData = await getUserByID(userID);
    }
    return NextResponse.json(resultData);    
}

