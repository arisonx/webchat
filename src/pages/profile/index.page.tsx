import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../../components/layout';
import {
  Container,
  Heading,
  EditAraContainer,
  ReturnButton,
  EditAreaComponent,
  UserDataContainer,
  UserData,
  EditDataButton,
  UserDataTextArea,
} from './styles';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';
import { authOptions } from '../api/auth/[...nextauth].api';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { User } from 'phosphor-react';
import { useRef, useState } from 'react';
import { Varela } from '@next/font/google';
import { IPageProps } from '@/@types/PageProps';

//imports

//font
const varela = Varela({
  subsets: ['latin'],
  weight: ['400'],
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

  const [newUserName, setNewUserName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPerfilUrl, setNewPerfilUrl] = useState('');
  const [DataUpdatedAlert, setDataUpdatedAlert] = useState(false);
  const [DataErrorAlert, setDataErrorAlert] = useState(false);
  const session = useSession();
  const NextRouter = useRouter();

  return (
    <>
      <Head>
        <title>WebChat | Profile</title>
      </Head>

      <Layout
        classname={varela.className}
        centralizedComponents={true}
      >
        <ReturnButton
          className={varela.className}
          onClick={() => NextRouter.back()}
        >
          <FaArrowCircleLeft />
          Voltar
        </ReturnButton>
        <Container>
          <Heading>
            Aqui está o seu perfil <span>{session.data?.user?.name}</span>
          </Heading>
          {/*---------------->Name Area*<-------------------------*/}
          <EditAraContainer>
            <EditAreaComponent>
              <UserDataContainer>
                <UserDataTextArea>
                  <UserData>
                    {session.data?.user?.name}
                    <User />
                  </UserData>
                </UserDataTextArea>
                <EditDataButton>Editar</EditDataButton>
              </UserDataContainer>
            </EditAreaComponent>
          </EditAraContainer>
          {/*---------------->Email Area*<-------------------------*/}
          <EditAraContainer>
            <EditAreaComponent>
              <UserDataContainer>
                <UserDataTextArea>
                  <UserData>
                    {session.data?.user?.email}
                    <User />
                  </UserData>
                </UserDataTextArea>
                <EditDataButton>Editar</EditDataButton>
              </UserDataContainer>
            </EditAreaComponent>
          </EditAraContainer>
          {/*---------------->Photo Area*<-------------------------*/}
          <EditAraContainer>
            <EditAreaComponent>
              <UserDataContainer>
                <UserDataTextArea>
                  <UserData>
                    {session.data?.user?.image}
                    <User />
                  </UserData>
                </UserDataTextArea>
                <EditDataButton>Editar</EditDataButton>
              </UserDataContainer>
            </EditAreaComponent>
          </EditAraContainer>
        </Container>
      </Layout>
    </>
  );
}
