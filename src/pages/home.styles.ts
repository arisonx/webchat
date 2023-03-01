import { styled } from '../styles/styles';

export const AppContainer = styled('main', {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const SideBar = styled('nav', {
  width: '15%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$bgSideBar',
  borderRadius: '5px',
  padding: '.5rem',
});

export const AreaUsersConnected = styled('ul', {
  width: '100%',
  height: '90%',
});

export const LoggedInUser = styled('div', {
  width: '100%',
  height: '10%',
});

export const ContainerChat = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: '1',
  height: '100%',
  backgroundColor: '$blueDark',
  padding: '1rem 1.5rem',
});

export const HeaderChat = styled('header', {
  width: '100%',
  height: '80px',
});

export const AreaChat = styled('div', {
  width: '100%',
  display: 'flex',
  flex: '1',
});

export const SendMessageContainer = styled('div', {
  width: '80%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '1.5rem',
  backgroundColor: '$blueDarkLight',
});

export const InputToSendMessage = styled('input', {
  borderRadius: '1.5rem',
  outline: 'none',
  border: 'none',
  width: '100%',
  fontSize: '1rem',
  padding: '1rem 1.5rem',
  fontWeight: '400',
  background: 'none',
  color: '$whiteText',
  '&::placeholder': {
    color: '$whiteText',
    fontSize: '1rem',
    fontWeight: 'light',
  },
});

export const ButtonSendMessage = styled('button', {
  border: 'none',
  position: 'absolute',
  right: '1rem',
  background: 'none',
  cursor: 'pointer',
  '& svg': {
    fontSize: '2rem',
    color: '$whiteText',
    fontWeight: 'bold',
  },
});
