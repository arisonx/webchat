import { styled } from '@/styles/config';

export const Container = styled('div', {
  width: '80%',
  height: '80%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  paddingTop: '1rem 0',
  gap: '3rem',
});

export const Heading = styled('h1', {
  color: '$whiteText',
  '& span': {
    color: '$green800',
  },
  fontSize: '2rem',
  fontWeight: 'bold',
});

export const EditAraContainer = styled('div', {
  width: '100%',
  height: '100%',
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
    cursor: 'pointer',
  },
  '& svg': {
    fontSize: '1.5rem',
  },
});

export const EditAreaComponent = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '15px',
});

export const UserDataContainer = styled('div', {
  display: 'flex',
  border: '2px solid $purpleSecondary',
  width: '85%',
  height: '65%',
  borderRadius: '15px',
  alignItems: 'center',
  justifyContent: 'space-around',
});

export const UserDataTextArea = styled('div', {
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const UserData = styled('h2', {
  border: '2px solid yellow  ',
  fontWeight: 'bold',
  color: '$whiteText',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  fontSize: '1rem',
  '& svg': {
    color: '$whiteText',
    fontWeight: 'bold',
    fontSize: '2rem',
  },
});

export const EditDataButton = styled('button', {
  padding: '.5rem 0',
  width: '8rem',
  display: 'flex',
  justifyContent: 'center',
  background: 'none',
  border: '1px solid $purpleSecondary',
  color: '$whiteText',
  fontSize: '1.1rem',
  fontWeight: '400',
  borderRadius: '.5rem',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: '0 0 50px rgba(27.5, 0, 54.5)',
    transform: 'scale(1.1)',
  },
});
