import * as zod from 'zod';
import axios, { AxiosResponse } from 'axios';
import Head from 'next/head';
import { Inter, Poppins } from '@next/font/google';
import { SigninLayout } from '../layout';
import { useEffect, useState } from 'react';
import { destroyCookie } from 'nookies';
import {
  SigninContainer,
  SubmitArea,
  SubmitButton,
  ReturnButton,
  InputContainer,
} from './styles';
import { HiArrowSmRight } from 'react-icons/hi';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { UserDataErrorComponent } from '@/components/user-data-error';
import { ArrowCircleRight } from 'phosphor-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth].api';
import { IPageProps } from '@/@types/PageProps';
import { Sucess } from '@/components/sucess';
import { IUserData } from '@/@types/IApiDataUser';
import { Loading } from '@/components/loading/';

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
// font
const poppins = Poppins({
  weight: ['100', '200', '300', '300', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'devanagari', 'latin-ext'],
  preload: true,
});

//validations
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const cookies = parseCookies({ req: ctx.req });
  const sessionWithUserData = cookies['session'];
  const username = cookies['webchat:name'];
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (session || sessionWithUserData) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  if (!username) {
    return {
      redirect: {
        destination: '/signin',
        permanent: true,
      },
    };
  }
  return {
    props: { cookies },
  };
};

//---------------------------->  PAGE
export default function Email({ cookies }: IPageProps) {
  const [UserDataInvalid, setUserDataInvalid] = useState(true);
  const [userAlreadyExists, setUserAlreadyExists] = useState(false);
  const [sucess, setSucess] = useState(true);
  const [DefaultError, setDefaultError] = useState(false);
  const userName = cookies['webchat:name'] as string;
  const userPerfilUrl = cookies['webchat:perfilurl'] as string;

  // router instance
  const NextRouter = useRouter();

  //input data schema
  const validationsSchema = zod.object({
    email: zod
      .string()
      .min(2, { message: 'Digite seu email' })
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: 'Formato inválido!' }),
  });
  type ValidationSchema = zod.infer<typeof validationsSchema>;
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    clearErrors,
    resetField,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationsSchema),
  });
  //submit
  const submit: SubmitHandler<ValidationSchema> = async ({ email }) => {
    const data: IUserData = {
      name: userName,
      perfilurl: userPerfilUrl,
      email: email,
    };
    try {
      const userExists = await axios.post('/api/user/get-by-email', {
        email: email,
      });
      const { data: userExistsStatus } = userExists;
      if (userExistsStatus?.exists === true) {
        setUserAlreadyExists(true);
        setSucess(false);
        resetField('email');
      }
      if (userExistsStatus?.exists === false) {
        const creatingUser = await axios.post(`/api/user/create`, data);
        if (creatingUser.status === 200) {
          const createCookie = await axios.post('/api/user/create-cookie', {
            token: creatingUser.data.token,
          });
          if (createCookie.status === 200) {
            setSucess(true);
            destroyCookie(null, 'webchat:name');
            destroyCookie(null, 'webchat:perfilurl');
            NextRouter.push('/');
          }
        }
      }
    } catch (err) {
      setDefaultError(true);
      setSucess(false);

      setTimeout(() => {
        setDefaultError(false);
      }, 1000);
    }
  };
  //continue
  const handleContinue = async () => {
    try {
      const creatingUser = await axios.post('/api/user/create', {
        name: userName,
        perfil_url: userPerfilUrl,
      });

      if (creatingUser.status === 200) {
        const createCookie = await axios.post('/api/user/create-cookie', {
          token: creatingUser.data.token,
        });

        if (createCookie.status === 200) {
          destroyCookie(null, 'webchat:name');
          destroyCookie(null, 'webchat:perfilurl');
          NextRouter.push('/');
        }
      }
    } catch (err) {
      setDefaultError(true);
      setSucess(false);
      setTimeout(() => {
        setDefaultError(false);
      }, 1000);
    }
  };
  //focus
  useEffect(() => {
    setFocus('email');
    if (errors.email) {
      setUserDataInvalid(true);
    }
  }, [errors.email, setFocus]);

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
        {isSubmitSuccessful && sucess && !userAlreadyExists && (
          <Sucess
            disableAction={setSucess}
            text="Informação recebida com sucesso!"
          />
        )}
        {userAlreadyExists && (
          <UserDataErrorComponent
            disableAction={setUserAlreadyExists}
            message="Email já está sendo usado"
            state={userAlreadyExists}
          />
        )}

        {DefaultError && (
          <UserDataErrorComponent
            disableAction={setUserDataInvalid}
            message="Ocorreu um erro, Tente Novamente!"
            state={UserDataInvalid}
          />
        )}

        {UserDataInvalid && errors.email && (
          <UserDataErrorComponent
            disableAction={setUserDataInvalid}
            clearErrosAction={clearErrors}
            message={errors.email.message as string}
            state={UserDataInvalid}
          />
        )}
        <ReturnButton
          className={poppins.className}
          onClick={() => NextRouter.back()}
        >
          <FaArrowCircleLeft />
          Voltar
        </ReturnButton>
        <SigninContainer>
          <h2>Por fim, informe seu email</h2>
          <SubmitArea onSubmit={handleSubmit(submit)}>
            <InputContainer>
              <input
                type="email"
                placeholder="jhondoe@gmail.com"
                id="email"
                className={inter.className}
                {...register('email')}
              />
              <button
                type="button"
                disabled={isSubmitting}
                className={inter.className}
                onClick={handleContinue}
              >
                Pular
                <ArrowCircleRight />
              </button>
            </InputContainer>

            {isSubmitting && !isSubmitSuccessful ? (
              <Loading text="Enviando dados ..." />
            ) : (
              <SubmitButton
                type="submit"
                className={poppins.className}
                disabled={isSubmitting}
              >
                Enviar
                <HiArrowSmRight />
              </SubmitButton>
            )}
          </SubmitArea>
        </SigninContainer>
      </SigninLayout>
    </>
  );
}
