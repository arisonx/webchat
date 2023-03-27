import { EditButton } from './styles';
import { useState, Dispatch, useMemo } from 'react';
import { AiFillEdit, AiFillSave } from 'react-icons/ai';
import { RefObject } from 'react';
import axios from 'axios';

interface IEditUserData {
  save?: boolean;
  refInput: RefObject<HTMLInputElement>;
  classname: string;
  default_value: string;
  setAlertCheck: Dispatch<boolean>;
  setAlertError: Dispatch<boolean>;
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
  setAlertCheck,
  setAlertError,
}: IEditUserData) => {
  const [ButtonSave, setButtonSave] = useState(false);
  const handleEditAction = () => {
    !save ? setButtonSave(true) : setButtonSave(false);
    setAlertCheck(false);
    setAlertError(false);
    if (refInput.current) {
      refInput.current.focus();
      refInput.current.disabled = false;
      refInput.current.placeholder = '';
      if (!data.name && !data.email && !data.perfilurl) {
        return (refInput.current.value = default_value);
      } else {
        return (refInput.current.value =
          data.name ?? data.email ?? data.perfilurl!!);
      }
    }
  };

  const handleNewUserData = async () => {
    setButtonSave(false);
    if (refInput.current) {
      refInput.current.disabled = true;
    }
    if (!data.name && !data.email && !data.perfilurl) {
      setAlertError(true);
    } else {
      await axios
        .post('/api/user', {
          name: data.name ?? null,
          email: data.email ?? null,
          perfilUrl: data.perfilurl ?? null,
        })
        .then((res) => {
          if (res.data) {
            setAlertCheck(true);
          }
        });
    }
  };

  return (
    <>
      {ButtonSave ? (
        <EditButton
          onClick={handleNewUserData}
          className={classname}
          type="button"
        >
          salvar
          <AiFillSave />
        </EditButton>
      ) : (
        <EditButton
          onClick={handleEditAction}
          className={classname}
          type="button"
        >
          editar
          <AiFillEdit />
        </EditButton>
      )}
    </>
  );
};
