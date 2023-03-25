import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';

interface IDataUser {
  name: string;
  email?: string;
  perfilUrl?: string;
}

export default function handleUser(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, perfilUrl }: IDataUser = req.body;

  if (!name && !email && !perfilUrl) {
    return res.status(404).json({
      status: 'error',
      message: ' all data is invalid',
    });
  }

  if (name) {
    setCookie({ res }, 'webchat:UserName', name.toLowerCase(), {
      maxAge: 60 * 60 * 24 * 2, //2 dias
      path: '/',
    });
  }

  if (email) {
    setCookie({ res }, 'webchat:Email', email.toLowerCase(), {
      maxAge: 60 * 60 * 24 * 2, //2 dias
      path: '/',
    });
  }

  if (perfilUrl) {
    setCookie({ res }, 'webchat:Perfil_Url', perfilUrl.toLowerCase(), {
      maxAge: 60 * 60 * 24 * 2, //2 dias
      path: '/',
    });
  }

  return res.status(200).json({ message: 'cookie created successfully' });
}
