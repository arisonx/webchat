import type { NextApiRequest, NextApiResponse } from 'next';

export default function HandleUserDelete(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const api_url = process.env.API_URL as string;
  
}
