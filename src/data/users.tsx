import db from '@/lib/knex';

export type newUserType = {
  user_id: string,
  user_name: string,
  user_email: string,
  user_department: string,
  user_position?: string,
  user_filial?: string
};

export const getUsers = async () => {
  let resultData:Array<{}> = [];
  return resultData;
}

export const insertUsers = async (userdata: newUserType) => {
  return await [];
}

