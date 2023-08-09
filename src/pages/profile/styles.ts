import { styled } from '@/styles/config'

export const Container = styled('div', {
	width: '80%',
	height: '80%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	position: 'relative',
	paddingTop: '1rem 0',
	gap: '3rem',
})

export const Heading = styled('h1', {
	color: '$whiteText',
	'& span': {
		color: '$green800',
	},
	fontSize: '2rem',
	fontWeight: 'bold',
})

export const EditAraContainer = styled('div', {
	width: '100%',
	height: '100%',
})

export const ReturnButton = styled('button', {
	padding: '.5rem 0',
	width: '10rem',
	display: 'flex',
	justifyContent: 'center',
	background: 'none',
	alignItems: 'center',
	gap: '.4rem',
	color: '$whiteText',
	fontSize: '1.1rem',
	fontWeight: '400',
	border: 'none',
	borderRadius: '.5rem',
	cursor: 'pointer',
	position: 'absolute',
	left: '1%',
	top: '4%',
	'&:hover': {
		color: '$blueHover',
		cursor: 'pointer',
	},
	'& svg': {},
})

export const EditAreaComponent = styled('div', {
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: '15px',
})

export const UserDataContainer = styled('div', {
	display: 'flex',
	border: '2px solid $purpleSecondary',
	width: '85%',
	height: '65%',
	borderRadius: '15px',
	alignItems: 'center',
	justifyContent: 'center',
	gap:".5rem",
	padding:"0% 4%"
	
})

export const UserDataTextArea = styled('div', {
	display: 'flex',
	alignItems: 'center',
	flex: '1',
	justifyContent: 'space-between',
})

export const UserData = styled('h2', {
	flex: '1',
	fontWeight: 'bold',
	color: '$whiteText',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: '2rem',
	fontSize: '1rem',
	padding:" 0 20%",
	'& svg': {
		color: '$whiteText',
		fontWeight: 'bold',
		fontSize: '2rem',
	},
})


export const UserDataInput = styled('input', {
	border: '2px solid yellow',
	width: '40px',
	padding: '.4rem',
})
