import { InputElement } from './styles';
import { Roboto } from '@next/font/google';
//imports

//font
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  preload: true,
});

interface IComponentProps {
  disabled: boolean;
  ref: any;
  userData: {
    name?: string;
    email?: string;
    perfil_url?: string;
  };
}

//component
export function Input({ userData, disabled, ref }: IComponentProps) {
  return disabled ? (
    <InputElement
      type="text"
      placeholder={userData.name ?? userData.email ?? userData.perfil_url}
      disabled
      className={roboto.className}
       ref={ref}
    />
  ) : (
    <InputElement
      type="text"
      className={roboto.className}
    />
  );
}
