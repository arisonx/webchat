import { Layout } from '../../components/layout';
import {
  ProfilePageContainer,
  ReturnLink,
  InputArea,
  InputElement,
} from './styles';

import { EditUserDataButton } from './components/editButton';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';
import { authOptions } from '../api/auth/[...nextauth].api';
import { getServerSession } from 'next-auth';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { IPageProps } from '@/@types/PageProps';
import { useRef } from 'react';
import { Roboto } from '@next/font/google';
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
  if (!session && !UserName) {
    return {
      redirect: {
        destination: '/signin',
        permanent: true,
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
export default function Profile({ cookies }: IPageProps) {
  //hooks
  const nameInputElement = useRef<HTMLInputElement>(null);
  const emailInputElement = useRef<HTMLInputElement>(null);
  const perfilUrlInputElement = useRef<HTMLInputElement>(null);

  //cookies data
  const userName = cookies['webchat:UserName'];
  const userEmail = cookies['webchat:Email'];
  const userPerfilUrl = cookies['webchat:Perfil_Url'];

  let newUserName: string;
  let newEmail: string;
  let newPerfilUrl: string;

  return (
    <>
      <Head>
        <title>WebChat | Profile</title>
      </Head>
      <Layout
        svg={false}
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ReturnLink>
          <Link href="/">
            <BsArrowLeftCircleFill />
            Voltar
          </Link>
        </ReturnLink>
        <ProfilePageContainer>
          {userName ? (
            <>
              <label htmlFor="name">Name</label>
              <InputArea>
                <InputElement
                  type="text"
                  ref={nameInputElement}
                  placeholder={userName}
                  disabled
                  id="name"
                  onChange={(e) => (newUserName = e.target.value)}
                />
                {
                  <EditUserDataButton
                    save={false}
                    refInput={nameInputElement}
                    classname={roboto.className}
                    
                  />
              
                }
              </InputArea>
            </>
          ) : (
            <InputElement />
          )}
        </ProfilePageContainer>
      </Layout>
    </>
  );
}
