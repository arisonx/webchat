import { EditButton } from './styles';
import { useState } from 'react';
import { AiFillEdit, AiFillSave } from 'react-icons/ai';
import { RefObject } from 'react';
import { api } from '@/lib/axios';

interface IEditUserData {
  save?: boolean;
  refInput: RefObject<HTMLInputElement>;
  classname: string;
  default_value: string;
  data: {
    name?: string;
    perfilurl?: string;
    email?: string;
  };
}

export const EditUserDataButton = ({
  save,
  refInput,
  classname,
  data,
  default_value,
}: IEditUserData) => {
  const [ButtonSave, setButtonSave] = useState(false);
  const handleEditAction = () => {
    !save ? setButtonSave(true) : setButtonSave(false);
    if (refInput.current) {
      refInput.current.focus();
      refInput.current.disabled = false;
      refInput.current.placeholder = '';
      if (!data.name || !data.email || !data.perfilurl) {
        return (refInput.current.value = default_value);
      }
    }
  };

  const handleNewUserData = async () => {
    setButtonSave(false);

    if (refInput.current) {
      refInput.current.disabled = true;
    }

    // se algum dado for recebido, atualiza no backend
    if (data.name || data.email || data.perfilurl)
      await api.post('/user', {
        email: data.email ?? null,
        name: data.name ?? null,
        perfilUrl: data.perfilurl ?? null,
      });
  };

  return (
    <>
      {ButtonSave ? (
        <EditButton
          onClick={handleNewUserData}
          className={classname}
        >
          salvar
          <AiFillSave />
        </EditButton>
      ) : (
        <EditButton
          onClick={handleEditAction}
          className={classname}
        >
          editar
          <AiFillEdit />
        </EditButton>
      )}
    </>
  );
};
