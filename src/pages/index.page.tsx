import Head from 'next/head';
import axios from 'axios';
import { GetServerSideProps, GetServerSidePropsContext } from 'next/types';
import { parseCookies, destroyCookie } from 'nookies';
import { Layout } from '../components/layout';
import {
  AppContainer,
  ContainerChat,
  AreaUsersConnected,
  LoggedInUser,
  SideBar,
  HeaderChat,
  AreaChat,
  InputToSendMessage,
  SendMessageContainer,
  ButtonSendMessage,
  ButtonSignOut,
} from './home.styles';
import { IoMdSend } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { FaUserEdit } from 'react-icons/fa';
import { Roboto } from '@next/font/google';
import { useEffect, Suspense, useState } from 'react';
import { WebSocketConnection } from '../lib/socketIo/connection';
import { UserDataErrorComponent } from '../components/user-data-error';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth].api';
import { IPageProps } from '@/@types/PageProps';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
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
  const sessionWithUserData = cookies['session'];

  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (!session && !sessionWithUserData) {
    return {
      redirect: {
        destination: '/signin',
        permanent: true,
      },
    };
  }

  if (sessionWithUserData) {
    const userExists = await fetch(
      `${process.env.LOCAL_URL}/api/user/get-by-token`,
      {
        method: 'POST',
        body: JSON.stringify({
          token: sessionWithUserData,
        }),
        cache: 'force-cache',
      }
    );
    const user = await userExists.json();
    return {
      props: {
        user,
        cookies,
      },
    };
  }

  return {
    props: {
      cookies,
    },
  };
};
//page
export default function Home({ cookies, user }: IPageProps) {
  //hooks
  const { data: dataSession, status: statusSession } = useSession();
  const [deleteError, setDeleteError] = useState(false);
  const router = useRouter();

  //global variables
  let message: string;

  //connecting with webSocketServer
  useEffect(() => {
    // WebSocketConnection();
  }, []);

  const SendMessage = () => {
    console.log(message);
  };
  const handleSignOut = async () => {
    if (statusSession == 'authenticated') {
      await signOut({
        redirect: true,
      });
      router.push('/signin');
    } else {
      await axios
        .delete('/api/user/delete')
        .then(() => {
          destroyCookie(null, 'session');
          router.push('/signin');
        })
        .catch(() => {
          setDeleteError(true);
        });
    }
  };

  return (
    <>
      <Head>
        <title>WebChat | Bate-Papo</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
      </Head>

      <Layout
        centralizedComponents={false}
        classname={roboto.className}
      >
        {deleteError && (
          <UserDataErrorComponent
            message="Ocorreu um erro"
            disableAction={setDeleteError}
            state={deleteError}
          />
        )}
        <AppContainer>
          <SideBar>
            <AreaUsersConnected>
              <h2>Hello world</h2>
            </AreaUsersConnected>
            <LoggedInUser>
              <Image
                src={
                  user?.perfil_url ??
                  dataSession?.user?.image ??
                  '/avatardefault.svg'
                }
                alt="profile"
                className="profileImage"
                width={40}
                height={40}
              />
              <span>
                {user?.name ?? dataSession?.user?.name ?? 'carregando'}
              </span>
              <Link href="/profile">
                <FaUserEdit />
              </Link>
            </LoggedInUser>
          </SideBar>
          <ContainerChat>
            <HeaderChat>
              <ButtonSignOut
                type="button"
                className={roboto.className}
                onClick={handleSignOut}
              >
                <BiLogOut />
                Sair
              </ButtonSignOut>
            </HeaderChat>

            <AreaChat></AreaChat>
            <SendMessageContainer>
              <InputToSendMessage
                type="text"
                placeholder="Digite sua mensagem"
                className={roboto.className}
                onChange={(e) => {
                  message = e.target.value;
                }}
              />
              <ButtonSendMessage
                type="button"
                onClick={SendMessage}
              >
                <IoMdSend />
              </ButtonSendMessage>
            </SendMessageContainer>
          </ContainerChat>
        </AppContainer>
      </Layout>
    </>
  );
}
