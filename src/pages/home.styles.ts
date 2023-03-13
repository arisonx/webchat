import { styled } from '../styles/config';

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
});

export const AreaUsersConnected = styled('ul', {
  width: '100%',
  height: '90%',
});

export const LoggedInUser = styled('div', {
  width: '100%',
  height: '10%',
  display: ' flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '$grayGlass',
  padding: ' 0 .2rem  ',
  '& .profileImage': {
    borderRadius: '50%',
  },
  '& span': {
    color: '$whiteText',
    fontSize: '1.2rem',
  },

  '& svg': {
    color: '$whiteText',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
});

export const ContainerChat = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: '1',
  height: '100%',
  backgroundColor: '$blueDark',
  padding: '.4rem 1.5rem',
});

export const HeaderChat = styled('header', {
  width: '100%',
  height: '40px',
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '0 1rem',
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
  marginBottom: '.4rem',
});

export const InputToSendMessage = styled('input', {
  borderRadius: '1.5rem',
  outline: 'none',
  border: 'none',
  width: '100%',
  fontSize: '1rem',
  padding: '.8rem 1.5rem',
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
    fontSize: '1.7rem',
    color: '$whiteText',
    fontWeight: 'bolder',
  },
});

export const ButtonSignOut = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '$whiteText',
  fontSize: '1.2rem',
  fontWeight: 'bolder',
  display: 'flex',
  alignItems: 'center',
  gap: '.3rem',
  '& svg': {
    color: '$whiteText',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
});
