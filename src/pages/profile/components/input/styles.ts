import { styled } from '@/styles/config'

export const UserDataInput = styled('input', {
	width: '40px',
	display: 'flex',
	flex: '1',
	background: 'none',
	border:"$purpleSecondary 2px solid",
	color:"$whiteText",
	borderRadius:".3rem",
	padding:".5rem",
	fontSize:"1.1rem",
	"&::placeholder":{
		color:"$whiteText"
	}
})
