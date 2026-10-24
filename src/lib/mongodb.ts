import {MongoClient,Db} from 'mongodb';
const uri=process.env.MONGODB_URI;let clientPromise:Promise<MongoClient>|undefined;
export async function getDb():Promise<Db>{if(!uri)throw new Error('MONGODB_URI nu este configurat');if(!clientPromise)clientPromise=new MongoClient(uri,{maxPoolSize:10}).connect();return (await clientPromise).db(process.env.MONGODB_DB||'pictorescu');}
