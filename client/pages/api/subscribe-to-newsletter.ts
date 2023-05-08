// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as sdk from 'node-appwrite';

type Data = {
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (!process.env.APPWRITE_ENDPOINT || !process.env.APPWRITE_PROJECT || !process.env.APPWRITE_API || !process.env.APPWRITE_DATABASE_ID || !process.env.APPWRITE_COLLECTION_ID || !req.body.email) throw "Invalid request. Check body, and appwrite creds"
    const client = new sdk.Client();
    client.setEndpoint(process.env.APPWRITE_ENDPOINT!!).setProject(process.env.APPWRITE_PROJECT!!).setKey(process.env.APPWRITE_API!!).setSelfSigned(true)

    let database = new sdk.Databases(client);

    await database.createDocument(process.env.APPWRITE_DATABASE_ID!!, process.env.APPWRITE_COLLECTION_ID!!, 'unique()', req.body);
    res.status(200).send({ success: true })
  } catch (error:any) {
    if(error.type=="document_already_exists"){
      res.status(201).send({success: true});
      return;
    }
    
    console.log("Error adding user to newsletter", error);
    res.status(400).send({ success: false })
  }
}
