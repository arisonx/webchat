import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function HandleGetUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const api_url = process.env.API_URL as string;

  const { session: token } = req.cookies;

  const user = await axios.get(`${api_url}/user/get`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { data, status } = user;

  if (data && status === 200) {
    return res.status(200).json(data);
  } else {
    return res.status(400).send;
  }
}
