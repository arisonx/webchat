import { AlertButton } from './styles';
import { X, WarningCircle } from 'phosphor-react';
import { Roboto } from '@next/font/google';
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});
interface IPropsButton {
  message: string;
  state?: any;
}
export const AlertButtonMessage = ({ message, state }: IPropsButton) => {
  const closeButton = () => {
    state(false);
  };

  return (
    <AlertButton
      type="button"
      className={roboto.className}
    >
      <WarningCircle className="WarningCircleIcon" />
      {message}
      <X
        className="Xicon"
        onClick={closeButton}
      />
    </AlertButton>
  );
};
