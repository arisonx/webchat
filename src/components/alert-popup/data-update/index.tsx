import { DataUpdated, ContainerAnimation, Progress } from './styles';
import { FiCheckCircle } from 'react-icons/fi';
import { useEffect, useState } from 'react';
interface IdataUpdateComponent {
  classname: string;
  duration: number;
  text: string;
}

export const DataUpdateAnimation = ({
  classname,
  duration,
  text,
}: IdataUpdateComponent) => {
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
    <>
      <ContainerAnimation>
        <DataUpdated className={classname}>
          <p>{text}</p>
          <FiCheckCircle />
        </DataUpdated>
        <Progress
          value={value}
          max={duration}
        />
      </ContainerAnimation>
    </>
  ) : (
    <></>
  );
};
