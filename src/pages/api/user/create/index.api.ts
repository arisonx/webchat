import type { NextApiRequest, NextApiResponse } from 'next';
import { IUserData } from '@/@types/IApiDataUser';
import axios, { AxiosResponse } from 'axios';

export default async function HandleUserCreate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, perfilurl }: IUserData = req.body;
  const api_url = process.env.API_URL as string;

  if (!name && !email && !perfilurl) {
    return res.status(400).json({
      status: 'error',
    });
  }
  const user = (await axios.post(`${api_url}/user/create`, {
    name: name,
    email: email ?? undefined,
    perfil_url: perfilurl ?? undefined,
  })) as AxiosResponse;

  if (user.data.token) {
    return res.status(200).json(user.data);
  }

  return res.status(400);
}
