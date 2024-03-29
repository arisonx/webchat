import * as zod from 'zod';
import { Inter, Poppins } from '@next/font/google';
import { SigninLayout } from '../layout';
import Head from 'next/head';
import { useEffect, useState } from 'react';
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
import axios from 'axios';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth].api';
import { Sucess } from '@/components/sucess';
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
  const sessionWithUserData = cookies['webchat:session'];
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
    props: {},
  };
};

export default function Avatar() {
  const [UserDataInvalid, setUserDataInvalid] = useState(true);
  const [sucess, setSucess] = useState(true);
  const NextRouter = useRouter();

  //input data schema
  const validationsSchema = zod.object({
    avatar_url: zod
      .string()
      .min(2, { message: 'Digite a url' })
      .regex(
        /^((ftp|http|https):\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
        { message: 'Formato inválido!' }
      ),
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
  const submit: SubmitHandler<ValidationSchema> = async ({ avatar_url }) => {
    const createCookie = await axios.post('/api/user/create-cookie', {
      perfil_url: avatar_url,
    });
    if (createCookie.status == 200) {
      NextRouter.push('/signin/email');
    }
  };

  //continue
  const handleContinue = async () => {
    NextRouter.push('/signin/email');
  };

  useEffect(() => {
    setFocus('avatar_url');
    if (errors.avatar_url) {
      setUserDataInvalid(true);
    }
  }, [errors.avatar_url]);

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
        {UserDataInvalid && errors.avatar_url && (
          <UserDataErrorComponent
            disableAction={setUserDataInvalid}
            clearErrosAction={clearErrors}
            message={errors.avatar_url.message as string}
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
          <h2>Agora a url da imagem para seu avatar</h2>
          <SubmitArea onSubmit={handleSubmit(submit)}>
            <InputContainer>
              <input
                type="url"
                placeholder="https://example/image.png"
                id="avatar_url"
                className={inter.className}
                {...register('avatar_url')}
              />
              <button
                type="button"
                onClick={handleContinue}
                disabled={isSubmitting}
              >
                Pular
                <ArrowCircleRight />
              </button>
            </InputContainer>
            <SubmitButton
              type="submit"
              className={poppins.className}
              disabled={isSubmitting}
            >
              Enviar
              <HiArrowSmRight />
            </SubmitButton>
          </SubmitArea>
        </SigninContainer>
      </SigninLayout>
    </>
  );
}
