import { Layout } from '../../components/layout';
import { ProfilePageContainer } from './styles';
import Head from 'next/head';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';
import { authOptions } from '../api/auth/[...nextauth].api';
import { getServerSession } from 'next-auth';

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
export default function Profile() {
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
        <ProfilePageContainer>
          <h1>mslfmksmg</h1>
        </ProfilePageContainer>
      </Layout>
    </>
  );
}
