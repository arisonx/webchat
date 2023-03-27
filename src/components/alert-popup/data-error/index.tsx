import { useEffect, useState } from 'react';
import { DataErrorContainer, Progress } from './style';
import { WarningCircle } from 'phosphor-react';
import { ContainerAnimation } from '../data-update/styles';

interface IDataErrorComponent {
  classname: string;
  duration: number;
  text: string;
}

export const DataError = ({
  classname,
  duration,
  text,
}: IDataErrorComponent) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => prevValue + 0.1);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [duration]);

  return value < duration ? (
    <ContainerAnimation>
      <DataErrorContainer className={classname}>
        <p>{text}</p>
        <WarningCircle />
      </DataErrorContainer>
      <Progress
        value={value}
        max={duration}
      />
    </ContainerAnimation>
  ) : (
    <></>
  );
};
