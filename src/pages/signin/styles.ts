import { styled } from '@/styles/config';

//------------------SignIn Area------------------------>
//->container
export const SigninContainer = styled('section', {
  display: 'flex',
  width: '100%',
  flex: '1',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '5%',
  gap: '4rem',
  '& h2': {
    color: '$whiteTextSecondary',
    fontWeight: '300',
    fontSize: '1.1rem',
  },
});
//-> submit
export const SubmitArea = styled('form', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',
  paddingLeft: '4rem',
  '& input': {
    border: ' 2px solid #212529',
    padding: '0 .8rem ',
    height: '2.8rem',
    width: '19rem',
    background: 'none',
    color: '$gray100',
    fontSize: '1rem',
    borderRadius: '.5rem',
    fontWeight: '400',
    '&:focus': {
      border: 'none',
      outlineColor: '$blue700',
      outlineStyle: 'solid',
      outlineWidth: '2px',
    },
    '&::placeholder': {
      color: '$gray300',
    },
  },
  '& button': {
    background: 'none',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    '& svg': {
      color: '#BFC0C0',
      fontSize: '2.5rem',
    },
    '&:hover': {
      transform: 'scale(1.1) translate(3px)',
    },
  },
});
//-> authentication
export const AuthenticationArea = styled('div', {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '1rem',
  '& p': {
    color: '$whiteTextSecondary',
    fontSize: '1.3rem',
  },
  '& span': {
    marginTop: '.5rem',
    display: 'block',
    width: '70%',
    height: '1px',
    backgroundColor: '$blueDarkLight',
  },
});
export const AuthButtonsContainer = styled('div', {
  marginTop: '3rem',
  display: ' flex',
  width: '50%',
  justifyContent: 'center',
  gap: '2rem',
  '& button': {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    '& svg': {
      height: '2.2rem',
    },
    '&.auth-google-button': {
      '& svg': {
        height: '2rem',
      },
    },
  },
});
