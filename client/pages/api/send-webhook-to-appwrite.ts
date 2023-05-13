import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const jsonrte_ = req.body;
      res.status(200).send({ success: true });
      const body = { data: JSON.stringify(jsonrte_), async: false };
      const url =
        'https://appwrite.idta.in/v1/functions/643a7cbedb8ad8b926cc/executions';
      const responseFromAppwrite = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // TODO: Please add this into NEXT ENV
          'X-Appwrite-Project': '63fcfacfe6256fd71a88',
        },
        body: JSON.stringify(body),
      });
      console.log(responseFromAppwrite.status);
      return;
      // return res.status(200).send({ success: true });
    } catch (error: any) {
      console.log(error.type);

      console.log('Error: ', error);
      return res.status(400).send({ success: false });
    }
  } else if (req.method === 'GET') {
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed' });
  }
}
