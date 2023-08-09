import { Dispatch, SetStateAction } from 'react'
import { EditDataButton } from './styles'

interface EditButtonProps {
	type?: string
	nameState?: boolean
	emailState?: boolean
	imageUrlState?: boolean
	nameSetState?: Dispatch<SetStateAction<boolean>>
	emaisetState?: Dispatch<SetStateAction<boolean>>
	imageUrlsetState?: Dispatch<SetStateAction<boolean>>
	showNameInputState?: boolean
	showNameInputSetState?: Dispatch<SetStateAction<boolean>>
}

export const EditButton = ({
	type,
	emailState,
	emaisetState,
	imageUrlState,
	imageUrlsetState,
	nameSetState,
	nameState,
	showNameInputSetState,
	showNameInputState,
}: EditButtonProps) => {
	const editAction = () => {
		if (type == 'name') {
			nameState == true ? nameSetState!!(false) : nameSetState!!(true)
			showNameInputState==true? showNameInputSetState!!(false):showNameInputSetState!!(true)
		} else if (type == 'email') {
			emailState == true ? emaisetState!!(false) : emaisetState!!(true)
		} else if (type == 'perfilurl') {
			imageUrlState == true ? imageUrlsetState!!(false) : imageUrlsetState!!(true)
		}
	}

	return <EditDataButton onClick={editAction}>Editar</EditDataButton>
}
