import Head from 'next/head'
import { Layout } from '../../components/layout'
import {
	Container,
	Heading,
	EditAraContainer,
	ReturnButton,
	EditAreaComponent,
	UserDataContainer,
	UserData,
	UserDataTextArea,
} from './styles'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'
import { authOptions } from '../api/auth/[...nextauth].api'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { User } from 'phosphor-react'
import { useRef, useState } from 'react'
import { Varela } from '@next/font/google'
import { IPageProps } from '@/@types/PageProps'
import { SaveButton } from './components/SaveButton'
import { EditButton } from './components/editButton'
import { Input } from './components/input'
//imports

//font
const varela = Varela({
	subsets: ['latin'],
	weight: ['400'],
	preload: true,
})

//validations
export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const cookies = parseCookies({ req: ctx.req })
	const sessionWithUserData = cookies['session']

	const session = await getServerSession(ctx.req, ctx.res, authOptions)
	if (!session && !sessionWithUserData) {
		return {
			redirect: {
				destination: '/signin',
				permanent: true,
			},
		}
	}

	if (sessionWithUserData) {
		const userExists = await fetch(`${process.env.LOCAL_URL}/api/user/get-by-token`, {
			method: 'POST',
			body: JSON.stringify({
				token: sessionWithUserData,
			}),
			cache: 'force-cache',
		})
		const user = await userExists.json()
		return {
			props: {
				user,
				cookies,
			},
		}
	}

	return {
		props: {
			cookies,
		},
	}
}
//page
export default function Profile({ cookies, user }: IPageProps) {
	//html inputs refs
	const nameInputElement = useRef<HTMLInputElement>(null)
	const emailInputElement = useRef<HTMLInputElement>(null)
	const perfilUrlInputElement = useRef<HTMLInputElement>(null)

	//input states
	const [showNameInput, setShowNameInput] = useState(false)
	const [showEmailInput, setShowEmailInput] = useState(false)

	//save button states
	const [showSaveNameButton, setShowSaveNameButton] = useState(false)
	const [showSaveEmailButton, setShowSaveEmailButton] = useState(false)
	const [showSavePerfilUrlButton, setShowSavePerfilUrlButton] = useState(false)

	// inputs Values
	const [nameValue, setNameValue] = useState('')
    console.log(nameValue)

	//sessions and session data
	const session = useSession()
	const NextRouter = useRouter()
	const imageSessionbyAuth = `${session.data?.user?.image?.substring(0, 40)} ...`
	const imageSessionCreate = `${user?.perfil_url.substring(0, 20)} ...`

	return (
		<>
			<Head>
				<title>WebChat | Profile</title>
			</Head>

			<Layout classname={varela.className} centralizedComponents={true}>
				<ReturnButton className={varela.className} onClick={() => NextRouter.back()}>
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
									{showNameInput == true ? (
										<Input
											target={nameInputElement}
											value={session.data?.user?.name!! ?? user?.name!!}
											setNameValue={setNameValue}
											type="name"
										/>
									) : (
										<UserData>
											{session.data?.user?.name ?? user?.name}
											<User />
										</UserData>
									)}
								</UserDataTextArea>

								{showSaveNameButton ? (
									<SaveButton state={showSaveNameButton} action={setShowSaveNameButton} />
								) : (
									<EditButton
										nameState={showSaveNameButton}
										nameSetState={setShowSaveNameButton}
										type="name"
										showNameInputState={showNameInput}
										showNameInputSetState={setShowNameInput}
									/>
								)}
							</UserDataContainer>
						</EditAreaComponent>
					</EditAraContainer>

					{/*---------------->Email Area*<-------------------------*/}
					<EditAraContainer>
						<EditAreaComponent>
							<UserDataContainer>
								<UserDataTextArea>
									<UserData>
										{session.data?.user?.email ?? user?.email}
										<User />
									</UserData>
								</UserDataTextArea>

								{showSaveEmailButton ? (
									<SaveButton state={showSaveEmailButton} action={setShowSaveEmailButton} />
								) : (
									<EditButton
										emailState={showSaveEmailButton}
										emaisetState={setShowSaveEmailButton}
										type="email"
									/>
								)}
							</UserDataContainer>
						</EditAreaComponent>
					</EditAraContainer>
					{/*---------------->Photo Area*<-------------------------*/}
					<EditAraContainer>
						<EditAreaComponent>
							<UserDataContainer>
								<UserDataTextArea>
									<UserData>
										{imageSessionCreate ? imageSessionCreate : imageSessionbyAuth}
										<User />
									</UserData>
								</UserDataTextArea>
								{showSavePerfilUrlButton ? (
									<SaveButton state={showSavePerfilUrlButton} action={setShowSavePerfilUrlButton} />
								) : (
									<EditButton
										imageUrlState={showSavePerfilUrlButton}
										imageUrlsetState={setShowSavePerfilUrlButton}
										type="perfilurl"
									/>
								)}
							</UserDataContainer>
						</EditAreaComponent>
					</EditAraContainer>
				</Container>
			</Layout>
		</>
	)
}
