import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';
interface IDataUser {
  name: string;
  perfil_url: string;
}

export default function handleUser(req: NextApiRequest, res: NextApiResponse) {
  const { name, perfil_url }: IDataUser = req.body;
  //validation
  if (req.method === 'GET') {
    return res.status(401).json({
      status: 'error',
      message: 'method invalid',
    });
  }

  if (!name && !perfil_url) {
    return res.status(404).json({
      status: 'error',
      message: ' all data is invalid',
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
}
