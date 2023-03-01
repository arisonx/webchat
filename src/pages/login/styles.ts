import { styled } from '@/styles/styles';

export const ContainerFormLogin = styled('div', {
  width: '80%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
});

export const Form = styled('form', {
  backgroundColor: '$grayDark',
  width: '50%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: ' 1rem',
  gap: '2.2rem',
  borderRadius: '.4rem',
});

export const Input = styled('input', {
  padding: ' .5rem 1rem',
  borderRadius: '.3rem',
  outline: 'none',
  border: 'none',
  width: '95%',
  margin: '0 auto',
  fontSize: '1.2rem',
  fontWight: '900',
  fontStyle: 'bold',
  color: '$blackLight',
  letterSpacing: '.5px',
  backgroundColor: '$whiteSmoke',
});

export const Label = styled('label', {
  color: '$gray100',
  marginLeft: '1rem',
  fontSize: '1.1rem',
  paddingTop: '1rem',
  fontWight: '900',
});

export const ButtonSignin = styled('button', {
  backgroundColor: '$blue700',
  margin: '0 auto',
  padding: '.8rem 4rem',
  border: 'none',
  color: '$gray100',
  cursor: 'pointer',
  textAlign: 'start',
  borderRadius: '.3rem',
  fontSize: '1rem',
  fontWight: '900',
  letterSpacing: '1px',
  '&:hover': {
    background: '$blueHover',
    transform: 'scale(1.01,1.01)',
    transition: ' transform, background .1s ease-in-out',
  },
});

export const IconsBox = styled('div', {
  display: 'flex',
  gap: '1rem',
  margin: '0 auto',
  '& .ProvidersLogo': {
    color: '$gray900',
    fontSize: '2rem',
    width: '4rem',
    fontWeight: 'bolder',
  },
});

export const AuthButton = styled('button', {
  border: 'none',
  cursor: 'pointer ',
  background: 'none',
});
