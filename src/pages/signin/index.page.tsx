import * as zod from 'zod';
import { Inter } from '@next/font/google';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import {
  SigninContainer,
  SubmitArea,
  AuthenticationArea,
  AuthButtonsContainer,
} from './styles';
import { SigninLayout } from './layout';
import { UserDataErrorComponent } from '@/components/user-data-error';
import { ArrowCircleRight } from 'phosphor-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { HandlerSignIn } from '@/hooks/signIn';
import { useRouter } from 'next/router';
import axios from 'axios';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth].api';
import { Sucess } from '@/components/sucess';
import { Loading } from '../../components/loading';
//imports

//fonts
const inter = Inter({
  weight: ['100', '200', '300', '300', '500', '600', '700', '800', '900'],
  preload: true,
  subsets: [
    'latin',
    'cyrillic',
    'cyrillic-ext',
    'greek',
    'latin-ext',
    'vietnamese',
    'greek-ext',
  ],
});

//validations
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const cookies = parseCookies({ req: ctx.req });
  const sessionWithUserData = cookies['webchat:session'];
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (session || sessionWithUserData) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }
  return {
    props: {},
  };
};

export default function SignIn() {
  const [UserDataInvalid, setUserDataInvalid] = useState(false);
  const [authError, setAuthError] = useState(true);
  const [sucess, setSucess] = useState(true);
  const [isloading, setIsloading] = useState(false);
  const NextRouter = useRouter();
  //callback auth error
  const hasAuthError = !!NextRouter.query.error;

  //input data schema
  const validationsSchema = zod.object({
    name: zod
      .string()
      .min(2, { message: 'no mínimo 2 caracteres' })
      .max(12, { message: 'no máximo 12 caracteres' })
      .regex(/^[a-zA-Z0-9\s@]+$/, {
        message: 'Apenas letras!',
      }),
  });
  type ValidationSchema = zod.infer<typeof validationsSchema>;
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    clearErrors,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationsSchema),
  });

  //submit
  const submit: SubmitHandler<ValidationSchema> = async ({ name }) => {
    const createCookie = await axios.post('/api/user/create-cookie', {
      name: name,
    });

    if (createCookie.status == 200) {
      NextRouter.push('/signin/avatar');
    }
  };

  //loading for authentication

  //auth
  const SignInWithGoogleProvider = () => {
    setIsloading(true);
    HandlerSignIn({
      callbackurl: 'http://localhost/ui-teste',
      provider: 'google',
    });
  };
  const SignInWithGitHubProvider = () => {
    setIsloading(true);
    HandlerSignIn({
      callbackurl: 'http://localhost/ui-teste',
      provider: 'github',
    });
  };

  // setting errors and handle effects
  useEffect(() => {
    if (errors.name) {
      setUserDataInvalid(true);
      setIsloading(false);
    }
    setFocus('name');
  }, [errors.name, setFocus]);
  
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
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <SigninLayout>
        {isSubmitSuccessful && sucess && (
          <Sucess
            disableAction={setSucess}
            text="Informação recebida com sucesso!"
          />
        )}

        {errors.name?.message && UserDataInvalid && (
          <UserDataErrorComponent
            message={errors.name.message}
            disableAction={setUserDataInvalid}
            clearErrosAction={clearErrors}
            state={UserDataInvalid}
          />
        )}

        {authError && hasAuthError && (
          <UserDataErrorComponent
            message="autenticação não autorizada!"
            disableAction={setAuthError}
          />
        )}

        {isloading && <Loading text="Carregando, Aguarde..." />}

        <SigninContainer>
          <h2>Para começar, informe seu nome</h2>
          <SubmitArea onSubmit={handleSubmit(submit)}>
            <input
              type="text"
              placeholder="Digite seu nome"
              id="name"
              className={inter.className}
              {...register('name')}
            />
            <button
              type="submit"
              disabled={isSubmitting}
            >
              <ArrowCircleRight />
            </button>
          </SubmitArea>
          <AuthenticationArea>
            <p>ou</p>
            <span></span>
            <AuthButtonsContainer>
              <button
                className="auth-google-button"
                onClick={SignInWithGoogleProvider}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.5018 20.3887C37.5018 18.9498 37.3826 17.8998 37.1248 16.8109H20.3589V23.3053H30.2001C30.0018 24.9192 28.9303 27.3498 26.5493 28.983L26.516 29.2005L31.817 33.225L32.1843 33.2609C35.5572 30.2081 37.5018 25.7164 37.5018 20.3887"
                    fill="#4285F4"
                  />
                  <path
                    d="M20.3578 37.5C25.1792 37.5 29.2267 35.9443 32.1832 33.2611L26.5482 28.9831C25.0403 30.0137 23.0165 30.7332 20.3578 30.7332C15.6356 30.7332 11.6278 27.6804 10.1991 23.461L9.98964 23.4784L4.47754 27.659L4.40546 27.8554C7.34192 33.5721 13.3737 37.5 20.3578 37.5Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.2001 23.4611C9.82312 22.3722 9.60495 21.2054 9.60495 20C9.60495 18.7943 9.82312 17.6277 10.1803 16.5388L10.1703 16.3069L4.58909 12.0592L4.40648 12.1443C3.19622 14.5166 2.50177 17.1805 2.50177 20C2.50177 22.8194 3.19622 25.4832 4.40648 27.8554L10.2001 23.4611"
                    fill="#FBBC05"
                  />
                  <path
                    d="M20.3579 9.26662C23.711 9.26662 25.9729 10.6861 27.2626 11.8722L32.3023 7.05C29.2072 4.23056 25.1793 2.5 20.3579 2.5C13.3737 2.5 7.34194 6.42775 4.40546 12.1444L10.1793 16.5389C11.6278 12.3194 15.6357 9.26662 20.3579 9.26662"
                    fill="#EB4335"
                  />
                </svg>
              </button>
              <button onClick={SignInWithGitHubProvider}>
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.9983 6.25C14.6446 6.25 6.25 14.6446 6.25 25.0006C6.25 33.2847 11.6219 40.3118 19.0727 42.7923C20.0108 42.9638 20.3526 42.3849 20.3526 41.8876C20.3526 41.4433 20.3365 40.2635 20.3273 38.6992C15.1119 39.8318 14.0115 36.1853 14.0115 36.1853C13.1586 34.0202 11.9293 33.4435 11.9293 33.4435C10.2269 32.2798 12.0582 32.3028 12.0582 32.3028C13.9402 32.4363 14.9301 34.2354 14.9301 34.2354C16.6025 37.1004 19.319 36.2728 20.3872 35.794C20.5575 34.5819 21.041 33.7554 21.5774 33.287C17.414 32.8139 13.0366 31.2047 13.0366 24.0199C13.0366 21.9733 13.7675 20.2997 14.9669 18.9886C14.7735 18.5144 14.1301 16.6083 15.1499 14.0265C15.1499 14.0265 16.7245 13.5223 20.3066 15.9487C21.8018 15.5332 23.4064 15.3249 25.0006 15.318C26.5925 15.3249 28.197 15.5332 29.6945 15.9487C33.2743 13.5223 34.8455 14.0265 34.8455 14.0265C35.8688 16.6083 35.2253 18.5144 35.032 18.9886C36.2337 20.2997 36.96 21.9733 36.96 24.0199C36.96 31.2231 32.5756 32.8081 28.3985 33.272C29.0718 33.851 29.6715 34.9951 29.6715 36.7447C29.6715 39.2505 29.6485 41.2729 29.6485 41.8876C29.6485 42.3895 29.9858 42.973 30.9377 42.79C38.3827 40.3049 43.75 33.2824 43.75 25.0006C43.75 14.6446 35.3543 6.25 24.9983 6.25Z"
                    fill="#F8F7FF"
                  />
                </svg>
              </button>
            </AuthButtonsContainer>
          </AuthenticationArea>
        </SigninContainer>
      </SigninLayout>
    </>
  );
}
