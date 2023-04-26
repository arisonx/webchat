import axios, { AxiosError, AxiosResponse } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function GetUserByEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const api_url = process.env.API_URL as string;
  const { email } = req.body;
  console.log(req.body);

  const ok = await axios
    .post(`${api_url}/user/get-by-email`, {
      email: email,
    })
    .catch((err: AxiosError) => {
      console.log('deu erro krl', err.response?.status);
      return res.status(200).json({
        exists: false,
      });
    });

  if (ok) {
    return res.status(200).json({
      exists: true,
    });
  }
}
