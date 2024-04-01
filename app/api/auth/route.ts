
import {  NextResponse, NextRequest } from "next/server";
import { getUserByEmail } from '../../../data/users';
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

type UserType = {
  email: string,
  password: string
}

export async function POST(req: NextRequest) {
  const dataRaw:UserType = await req.json();
  const resultUser = await getUserByEmail(dataRaw.email);

  if(resultUser?.user_email == dataRaw.email &&
    resultUser.user_password == dataRaw.password
    ){
      const dataSession = jwt.sign({
          email: resultUser.user_email,
          role: resultUser.user_position
      }, process.env.JWT_SECRET as string, {expiresIn: '1h'})

      cookies().set('session', dataSession);
      return NextResponse.json({
        token: dataSession
      });
  } else {
    return NextResponse.json({
      error: {
        message: "Credentials invalid" 
      }
    });
  }
}

