import {useRef,useState} from 'react';
import { Layout } from '../../components/layout';
import {
  ContainerFormLogin,
  Form,
  Input,
  Label,
  ButtonSignin,
  IconsBox,
  AuthButton,
} from './styles';
import { AlertButtonMessage } from '../../components/alertButton';
import { useRouter } from 'next/navigation';
import { useRouter as NextUserRouter } from 'next/router';
import Head from 'next/head';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { Roboto } from '@next/font/google';
import { api } from '../../lib/axios';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';
import { signIn } from 'next-auth/react';
import { authOptions } from '../api/auth/[...nextauth].api';
import { getServerSession } from 'next-auth';
//imports

//font
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  preload: true,
});

//validations
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const cookies = parseCookies({ req: ctx.req });
  const UserName = cookies['webchat:UserName'];
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (UserName || session)
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };

  return {
    props: {},
  };
};
//page
export default function Login() {
  const router = useRouter();
  const inputElement = useRef(null);
  const [alertMessage, setAlertMessage] = useState(false);
  const [authError, setAuthError] = useState(true);
  const NextRouter = NextUserRouter();

  //auth error return
  const hasAuthError = !!NextRouter.query.error;

  //auth Google Provider
  const handleAuhtWithGoogle = async () => {
    await signIn('google');
  };

  //auth GitHub Provider
  const handleAuthWithGithub = async () => {
    await signIn('github');
  };

  let name: string, email: string, perfilUrl: string;
  //signin with UserName
  const handleSingIn = async () => {
    email || (perfilUrl && name.length <= 1)
      ? setAlertMessage(true)
      : setAlertMessage(false);
    !name || name.length <= 1 ? setAlertMessage(true) : setAlertMessage(false);
    if (name) {
      await api.post('/user', {
        name: name,
        email: email ?? undefined,
        perfilUrl: perfilUrl ?? undefined,
      });
      router.push('/');
    }
  };
  //jsx
  return (
    <>
      <Head>
        <title>WebChat | Sing In</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Layout svg={true}>
        {alertMessage && (
          <AlertButtonMessage
            message="Insira seu nome de usuário corretamente"
            state={setAlertMessage}
          />
        )}

        {hasAuthError && authError ? (
          <AlertButtonMessage
            message="Você não autorizou a autenticação corretamente!"
            state={setAuthError}
          />
        ) : (
          false
        )}

        <ContainerFormLogin className={roboto.className}>
          <Form>
            <Label htmlFor="InputName">Nome</Label>
            <Input
              id="InputName"
              onChange={(e) => {
                name = e.target.value;
              }}
              type="text"
              ref={inputElement}
              className={roboto.className}
            />
            <Label htmlFor="inputEmail">Email (opicional)</Label>
            <Input
              id="inputEmail"
              onChange={(e) => {
                email = e.target.value;
              }}
              className={roboto.className}
              type="email"
            />
            <Label htmlFor="inputPerfil">Perfil Url (opicional)</Label>
            <Input
              id="inputPerfil"
              onChange={(e) => {
                perfilUrl = e.target.value;
              }}
              className={roboto.className}
              type="text"
            />
            <ButtonSignin
              type="button"
              onClick={handleSingIn}
              className={roboto.className}
            >
              Entrar
            </ButtonSignin>

            <IconsBox className={roboto.className}>
              <AuthButton
                type="button"
                onClick={handleAuhtWithGoogle}
              >
                <FcGoogle className="ProvidersLogo" />
              </AuthButton>

              <AuthButton
                type="button"
                onClick={handleAuthWithGithub}
              >
                <BsGithub className="ProvidersLogo" />
              </AuthButton>
            </IconsBox>
          </Form>
        </ContainerFormLogin>
      </Layout>
    </>
  );
}
