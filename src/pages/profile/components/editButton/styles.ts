import { styled } from "@/styles/config";

export const EditDataButton = styled('button', {
	padding: '.5rem 0',
	width: '8rem',
	display: 'flex',
	justifyContent: 'center',
	background: 'none',
	border: '1px solid $purpleSecondary',
	color: '$whiteText',
	fontSize: '1.1rem',
	fontWeight: '400',
	borderRadius: '.5rem',
	cursor: 'pointer',
	'&:hover': {
		boxShadow: '0 0 50px rgba(27.5, 0, 54.5)',
		transform: 'scale(1.1)',
	},
})