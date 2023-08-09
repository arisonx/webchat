import { styled } from '@/styles/config'

export const Button = styled('button', {
	width: '8rem',
	height: '40px',
	border: 'none',
	background: '$green900',
	padding: '.4rem 2.2rem',
	color: '$whiteText',
	fontSize: '1.1rem',
	fontWeight: '400',
	borderRadius: '.5rem',
	cursor: 'pointer',
	
	'&:hover': {
		boxShadow: '0 0 10px rgba(0,128,0)',
		transform: 'scale(1.1)',
	},
})
