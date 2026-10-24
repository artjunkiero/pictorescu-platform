import {getDb} from './mongodb';
export async function publicArtworks(){try{return await (await getDb()).collection('artworks').find({'moderation.status':'approved','publication.status':'published','inventory.status':'available'}).project({title:1,slug:1,images:1,price:1,technique:1}).sort({createdAt:-1}).limit(24).toArray()}catch{return []}}
