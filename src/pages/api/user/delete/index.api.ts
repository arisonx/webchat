import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function HandleUserDelete(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'DELETE') {
    return res.status(404).json({
      message: 'method not implemented',
    });
  }
  if (!req.cookies.session) {
    return res.status(401).end();
  }
  const api_url = process.env.API_URL as string;
  const token = req.cookies.session;
  try {
    await axios.delete(`${api_url}/user/delete`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.status(200).end();
  } catch (err: any) {
    return res.status(500).json({
      message: 'ocorreu um erro ao deleter o usuário',
    });
  }
}
