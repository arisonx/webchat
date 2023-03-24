import { EditButton } from './styles';
import { useState } from 'react';
import { AiFillEdit, AiFillSave } from 'react-icons/ai';
import { RefObject } from 'react';

interface IEditUserData {
  save?: boolean;
  refInput: RefObject<HTMLInputElement>;
  classname: string;
}

export const EditUserDataButton = ({
  save,
  refInput,
  classname,
}: IEditUserData) => {
  const [ButtonSave, setButtonSave] = useState(false);
  const [data, setData] = useState("");

  const handlEditAction = () => {
    !save ? setButtonSave(true) : setButtonSave(false);
    if (refInput.current) {
      refInput.current.focus();
      refInput.current.disabled = false;
      refInput.current.placeholder = '';
     
    }
  };
  const handleNewUserData = () => {
    setButtonSave(false);
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
          onClick={handlEditAction}
          className={classname}
        >
          editar
          <AiFillEdit />
        </EditButton>
      )}
    </>
  );
};
