import type { NextApiRequest, NextApiResponse } from 'next';

export default async function HandleGetUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(401).json({
      message: 'method not implemented',
    });
  }

  const api_url = process.env.API_URL as string;

  const { token } = await JSON.parse(req.body);
  try {
    const user = await fetch(`${api_url}/user/get`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await user.json();
    return res.json(data);
  } catch (err: any) {
    return res.status(400).json({
      message: err.message,
    });
  }
}
