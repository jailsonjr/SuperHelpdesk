import {PrismaClient} from "@prisma/client"

export type newUserType = {
  user_id: string,
  user_name: string,
  user_email: string,
  user_department: string,
  user_position?: string,
  user_filial?: string
};

const dbOrm = new PrismaClient();

export const getUsers = async () => {
  let resultData:Array<{}> = [];
  resultData = await dbOrm.users.findMany();
  return resultData;
}

export const insertUsers = async (userdata: newUserType) => {
  return await [];
}

