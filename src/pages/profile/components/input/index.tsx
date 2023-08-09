import { Dispatch, RefObject, SetStateAction } from 'react'
import { UserDataInput } from './styles'

interface InputPops {
	target: RefObject<HTMLInputElement>
	value: string
	setNameValue: Dispatch<SetStateAction<string>>
	type: string
}

export const Input = ({ target, value, setNameValue, type }: InputPops) => {
	return (
		<UserDataInput
			placeholder={value}
			ref={target}
			onChange={(e) => {
				if (type === 'name') {
					setNameValue(e.target.value)
				}
			}}
		/>
	)
}