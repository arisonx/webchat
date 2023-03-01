// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';

interface IDataUser {
  name: string;
  email?: string;
  perfilUrl?: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, perfilUrl }: IDataUser = req.body;

  setCookie({ res }, 'webchat:UserName', name.toLowerCase(), {
    maxAge: 60 * 60 * 24 * 2, //2 dias
    path: '/',
  });

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
