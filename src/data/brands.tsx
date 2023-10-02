import db from '@/lib/knex';

export type newBrandType = {
  brand: string,
  model: string  
};

export const getBrands = async () => {
  let resultData:Array<{}> = [];
  const brandsRef = db.collection('brands');
  const result = await brandsRef.get();
  result.docs.forEach((doc) => {
    let data = {doc_id: doc.id, doc_data: doc.data()};
    if(data){resultData.push(data)}
  });
  return resultData;
}
