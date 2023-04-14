import type { NextApiRequest, NextApiResponse } from 'next';
import { sign } from 'jsonwebtoken';
import { setCookie } from 'nookies';
interface IDataUser {
  name: string;
  perfilUrl?: string;
  email?: string;
}

export default function handleUser(req: NextApiRequest, res: NextApiResponse) {
  const { name, perfilUrl, email }: IDataUser = req.body;

  //validations
  if (req.method === 'GET') {
    return res.status(401).json({
      status: 'error',
      message: 'method invalid',
    });
  }
  if (!name && !perfilUrl && !email) {
    return res.status(404).json({
      status: 'error',
      message: ' all data is invalid',
    });
  }
  if (name) {
    const token = sign({ name }, `${process.env.JWT_SECRET}`, {
      expiresIn: '7d',
    });
    setCookie({ res }, 'webchat:session', token, {
      maxAge: 60 * 60 * 24 * 7, //7 dias
      path: '/',
    });

    return res.status(200).json({
      status: 'ok',
      message: 'token created successfully',
    });
  }
}
