import { useTimeout } from '@/hooks/useTimeOut';
import { CheckedContainer } from './styles';
import { BsPatchCheckFill } from 'react-icons/bs';
import { Dispatch } from 'react';

interface IProps {
  disableAction: Dispatch<boolean>;
  text: string;
}

export function Sucess({ disableAction, text }: IProps) {
  useTimeout(() => {
    disableAction(true);
  }, 3000);

  return (
    <CheckedContainer>
      <p>{text}</p>
      <BsPatchCheckFill />
    </CheckedContainer>
  );
}
