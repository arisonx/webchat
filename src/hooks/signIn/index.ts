import axios from 'axios';
import { signIn } from 'next-auth/react';
import { parseCookies } from 'nookies';
interface IDataSignIn {
  cookies?: {
    name: string;
  };
  provider: string;
  callbackurl: string;
}

export const HandlerSignIn = async ({
  cookies,
  provider,
  callbackurl,
}: IDataSignIn) => {
  if (cookies?.name) {
    await axios.post('/api/user', {
      name: cookies.name,
    });
  }

  signIn(provider, {
    callbackUrl: callbackurl,
  });
};
