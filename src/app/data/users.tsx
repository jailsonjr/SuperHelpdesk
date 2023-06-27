import db from '@/app/lib/firebase';

export type newUserType = {
  id_treves: string,
  user_name: string,
  user_email: string,
  user_department: string,
  user_position?: string,
  user_filial?: string
};

export const getUsers = async () => {
  let resultData:Array<{}> = [];
  const usersRef = db.collection('users');
  const result = await usersRef.get();
  result.docs.forEach((doc) => {
    let data = {doc_id: doc.id, doc_data: doc.data()};
    if(data){resultData.push(data)}
  });
  return resultData;
}
