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
  width: '70%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',
  gap: '4rem',
  paddingLeft: '3rem',
});

export const InputContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  '& input': {
    border: ' 2px solid #212529',
    padding: '0 .8rem ',
    height: '2.8rem',
    width: '19rem',
    background: 'none',
    color: '$gray100',
    borderRadius: '.5rem',
    fontSize: '1rem',
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
    color: '#BFC0C0',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    gap: '.2rem',
    '&:hover': {
      transform: 'scale(1.1) translate(3px)',
      color: '$blueHover',
    },
    '& svg': {
      fontSize: '2rem',
    },
  },
});

export const SubmitButton = styled('button', {
  padding: '.5rem 0',
  width: '10rem',
  backgroundColor: '$puplePrimary',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '.4rem',
  color: '$whiteText',
  fontSize: '.9rem',
  fontWeight: '400',
  border: 'none',
  borderRadius: '.5rem',
  marginRight: '2rem',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$blueHover',
  },
  '& svg': {
    fontSize: '1.4rem',
  },
});

export const ReturnButton = styled('button', {
  padding: '.5rem 0',
  width: '10rem',
  display: 'flex',
  justifyContent: 'center',
  background: 'none',
  alignItems: 'center',
  gap: '.4rem',
  color: '$whiteText',
  fontSize: '1.1rem',
  fontWeight: '400',
  border: 'none',
  borderRadius: '.5rem',
  cursor: 'pointer',
  position: 'absolute',
  left: '1%',
  top: '4%',
  '&:hover': {
    color: '$blueHover',
  },
  '& svg': {
    fontSize: '1.5rem',
  },
});
