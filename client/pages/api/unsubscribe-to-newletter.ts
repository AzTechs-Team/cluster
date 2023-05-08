import type { NextApiRequest, NextApiResponse } from 'next';
import * as sdk from 'node-appwrite';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';

type Data = {
  success: boolean;
  message?: string;
};
type DeleteEmailData = {
  found: boolean;
  id?: string;
};
// TODO: Please hide this secret in a .env file
const secret = 'AmosIsLove';

const findTheUser = (
  email: string,
  resp: sdk.Models.DocumentList<sdk.Models.Document>
): DeleteEmailData => {
  let found = false;
  let id = '';
  resp.documents.forEach((doc: any) => {
    if (doc?.email === email) {
      id = doc.$id;
      found = true;
    }
  });
  return { found, id };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (
      !process.env.APPWRITE_ENDPOINT ||
      !process.env.APPWRITE_PROJECT ||
      !process.env.APPWRITE_API ||
      !process.env.APPWRITE_DATABASE_ID ||
      !process.env.APPWRITE_COLLECTION_ID ||
      !req.body.email
    )
      throw 'Invalid request. Check body, and appwrite creds';
    const client = new sdk.Client();
    client
      .setEndpoint(process.env.APPWRITE_ENDPOINT!!)
      .setProject(process.env.APPWRITE_PROJECT!!)
      .setKey(process.env.APPWRITE_API!!)
      .setSelfSigned(true);

    let database = new sdk.Databases(client);
    console.log(req.body.email, req.body.jwt);
    const jwtFromReq = req.body.jwt;
    try {
      if (!jwt) throw new Error('no jwt provided');
      const decoded: any = jwt.verify(jwtFromReq, secret);
      console.log(decoded);
      const resp = await database.listDocuments(
        process.env.APPWRITE_DATABASE_ID!!,
        process.env.APPWRITE_COLLECTION_ID!!
      );
      const user = findTheUser(req.body.email, resp);
      if (user.found) {
        await database.deleteDocument(
          process.env.APPWRITE_DATABASE_ID!!,
          process.env.APPWRITE_COLLECTION_ID!!,
          user.id!!
        );
      } else {
        return res
          .status(400)
          .send({ success: false, message: 'User not found' });
      }
    } catch (error: any | JsonWebTokenError) {
      if (error.name === 'JsonWebTokenError')
        return res.status(400).send({ success: false, message: error.message });
      console.log(error);
      return res
        .status(400)
        .send({ success: false, message: 'Some error occurred' });
    }

    // await database.createDocument(process.env.APPWRITE_DATABASE_ID!!, process.env.APPWRITE_COLLECTION_ID!!, 'unique()', req.body);
    return res.status(200).send({ success: true });
  } catch (error: any) {
    console.log(error.type);

    if (error.type == 'document_already_exists') {
      res.status(201).send({ success: true });
      return;
    }

    console.log('Error removing user to newsletter', error);
    return res.status(400).send({ success: false });
  }
}
