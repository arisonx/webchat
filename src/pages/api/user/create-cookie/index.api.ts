import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';
interface IUserData {
  name: string;
  perfil_url: string;
  token: string;
}

export default function handleUser(req: NextApiRequest, res: NextApiResponse) {
  const { name, perfil_url, token }: IUserData = req.body;
  //validation
  if (req.method === 'GET') {
    return res.status(404).json({
      message: 'method not implemented',
    });
  }

  if (!name && !perfil_url && !token) {
    return res.status(404).json({
      status: 'error',
      message: ' no data reported',
    });
  }

  if (name) {
    setCookie({ res }, 'webchat:name', name, {
      maxAge: 60 * 60 * 24 * 1, //1day
      path: '/',
    });

    return res.status(200).json({
      message: 'cookie created successfully',
    });
  }

  if (perfil_url) {
    setCookie({ res }, 'webchat:perfilurl', perfil_url, {
      maxAge: 60 * 60 * 24 * 1, //1day
      path: '/',
    });
    return res.status(200).json({
      message: 'cookie created successfully',
    });
  }
  if (token) {
    setCookie({ res }, 'session', token, {
      maxAge: 60 * 60 * 24 * 30, //1day
      path: '/',
    });
    return res.status(200).json({
      message: 'cookie created successfully',
    });
  }
}
