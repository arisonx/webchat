import { LoadingContainer } from './styles';
import { TailSpin } from 'react-loading-icons';

interface IProps {
  text: string;
}

export function Loading({ text }: IProps) {
  return (
    <>
      <LoadingContainer>
        <p>{text}</p>
        <TailSpin
          stroke="#ffff"
          width={30}
          height={30}
        />
      </LoadingContainer>
    </>
  );
}
