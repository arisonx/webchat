import { Dispatch, SetStateAction } from 'react'
import { Button } from './styeles'

interface ISaveProps {
	state: boolean
	action: Dispatch<SetStateAction<boolean>>
}

export const SaveButton = ({ state, action }: ISaveProps) => {
	const SaveAction = () => {
		alert('hello world')
		state ? action(false) : false
	}
	return <Button onClick={SaveAction}>Salvar</Button>
}
