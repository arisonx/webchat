export default function G() {
  return <h1></h1>;
}

//  import Head from 'next/head';
//  import Link from 'next/link';
//  import { Layout } from '../../components/layout';
//  import {
//    ProfilePageContainer,
//    ReturnLink,
//    InputArea,
//    InputElement,
//  } from './styles';
//  import { EditUserDataButton } from './components/editButton';
//  import { DataError } from '@/components/alert-popup/data-error';
//  import { DataUpdateAnimation } from '@/components/alert-popup/data-update';
//  import { GetServerSideProps, GetServerSidePropsContext } from 'next';
//  import { parseCookies } from 'nookies';
//  import { authOptions } from '../api/auth/[...nextauth].api';
//  import { getServerSession } from 'next-auth';
//  import { useSession } from 'next-auth/react';
//  import { BsArrowLeftCircleFill } from 'react-icons/bs';
//  import { useRef, useState } from 'react';
//  import { Roboto } from '@next/font/google';
//  import { IPageProps } from '@/@types/PageProps';
//  //imports

//  //font
//  const roboto = Roboto({
//    subsets: ['latin'],
//    weight: ['100', '300', '400', '500', '700', '900'],
//    preload: true,
//  });

//  //validations
//  export const getServerSideProps: GetServerSideProps = async (
//    ctx: GetServerSidePropsContext
//  ) => {
//    const cookies = parseCookies({ req: ctx.req });
//    const UserName = cookies['webchat:UserName'];
//    const session = await getServerSession(ctx.req, ctx.res, authOptions);
//    if (!session && !UserName) {
//      return {
//        redirect: {
//          destination: '/signin',
//          permanent: true,
//        },
//      };
//    }
//    return {
//      props: {
//        cookies,
//      },
//    };
//  };
//  //page
//  export default function Profile({ cookies }: IPageProps) {
//    //hooks
//    const nameInputElement = useRef<HTMLInputElement>(null);
//    const emailInputElement = useRef<HTMLInputElement>(null);
//    const perfilUrlInputElement = useRef<HTMLInputElement>(null);

//    const [newUserName, setNewUserName] = useState('');
//    const [newEmail, setNewEmail] = useState('');
//    const [newPerfilUrl, setNewPerfilUrl] = useState('');
//    const [DataUpdatedAlert, setDataUpdatedAlert] = useState(false);
//    const [DataErrorAlert, setDataErrorAlert] = useState(false);

//    const session = useSession();

//    return (
//      <>
//        <Head>
//          <title>WebChat | Profile</title>
//        </Head>
//        <Layout
//          svg={false}
//          css={{
//            display: 'flex',
//            justifyContent: 'center',
//            alignItems: 'center',
//          }}
//        >
//          <ReturnLink>
//            <Link href="/">
//              <BsArrowLeftCircleFill />
//              Voltar
//            </Link>
//          </ReturnLink>
//          {DataUpdatedAlert === true && (
//            <DataUpdateAnimation
//              classname={roboto.className}
//              duration={1.3}
//              text="Informação atualizada com Sucesso!"
//            />
//          )}
//          {DataErrorAlert === true && (
//            <DataError
//              classname={roboto.className}
//              duration={1.3}
//              text="Insira a informação para atualizar!"
//            />
//          )}

//          <ProfilePageContainer className={roboto.className}>
//            {userName || session.data?.user?.name ? (
//              <>
//                <label htmlFor="name">Nome</label>
//                <InputArea>
//                  <InputElement
//                    type="text"
//                    ref={nameInputElement}
//                    placeholder={userName ?? session?.data?.user?.name!!}
//                    disabled
//                    id="name"
//                    onChange={(e) => setNewUserName(e.target.value)}
//                    className={roboto.className}
//                  />
//                  {
//                    <EditUserDataButton
//                      save={false}
//                      refInput={nameInputElement}
//                      classname={roboto.className}
//                      data={{ name: newUserName }}
//                      default_value={userName ?? session.data?.user?.name!!}
//                      setAlertCheck={setDataUpdatedAlert}
//                      setAlertError={setDataErrorAlert}
//                    />
//                  }
//                </InputArea>
//              </>
//            ) : (
//              false
//            )}

//            {userEmail || session.data?.user?.email ? (
//              <>
//                <label htmlFor="email">Email</label>
//                <InputArea>
//                  <InputElement
//                    type="text"
//                    ref={emailInputElement}
//                    placeholder={userEmail ?? session?.data?.user?.email!!}
//                    disabled
//                    id="email"
//                    onChange={(e) => setNewEmail(e.target.value)}
//                    className={roboto.className}
//                  />
//                  {
//                    <EditUserDataButton
//                      save={false}
//                      refInput={emailInputElement}
//                      classname={roboto.className}
//                      data={{ email: newEmail }}
//                      default_value={userEmail ?? session.data?.user?.email!!}
//                      setAlertCheck={setDataUpdatedAlert}
//                      setAlertError={setDataErrorAlert}
//                    />
//                  }
//                </InputArea>
//              </>
//            ) : (
//              false
//            )}
//            {userPerfilUrl || session.data?.user?.image ? (
//              <>
//                <label htmlFor="perfil_url">Perfil Url</label>
//                <InputArea>
//                  <InputElement
//                    type="text"
//                    ref={perfilUrlInputElement}
//                    placeholder={userPerfilUrl ?? session?.data?.user?.image!!}
//                    disabled
//                    id="perfil_url"
//                    onChange={(e) => setNewPerfilUrl(e.target.value)}
//                    className={roboto.className}
//                  />
//                  {
//                    <EditUserDataButton
//                      save={false}
//                      refInput={perfilUrlInputElement}
//                      classname={roboto.className}
//                      data={{ perfilurl: newPerfilUrl }}
//                      default_value={userPerfilUrl ?? session.data?.user?.image!!}
//                      setAlertCheck={setDataUpdatedAlert}
//                      setAlertError={setDataErrorAlert}
//                    />
//                  }
//                </InputArea>
//              </>
//            ) : (
//              false
//            )}
//          </ProfilePageContainer>
//        </Layout>
//      </>
//    );
//  }
