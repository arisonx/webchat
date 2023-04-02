import { UserDataErrorContainer } from './styles';
import { X, WarningCircle } from 'phosphor-react';
import { useEffect, Dispatch, useState } from 'react';
import { useTimeout } from '@/hooks/useTimeOut';

interface IUserDataError {
  message: string;
  disableAction: Dispatch<boolean>;
  clearErrosAction?: () => void;
  state?: boolean;
}

export function UserDataErrorComponent({
  message,
  disableAction,
  clearErrosAction,
  state,
}: IUserDataError) {
  const [show, setShow] = useState(false);
  const DisableComponent = () => {
    disableAction(false);
  };

  useTimeout(() => {
    setShow(false);
    DisableComponent();
    if (clearErrosAction) {
      clearErrosAction();
    }
  }, 2000);

  useEffect(() => {
    setShow(true);
  }, [state, message]);
  return show ? (
    <UserDataErrorContainer>
      <WarningCircle />
      <p>{message}</p>
      <X onClick={DisableComponent} />
    </UserDataErrorContainer>
  ) : (
    <></>
  );
}
