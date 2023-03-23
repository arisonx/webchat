import { styled } from '@/styles/config';

export const ReturnLink = styled('div', {
  position: 'absolute',
  top: '1.4rem',
  left: '1.7rem',
  '& a': {
    alignItems: 'center',
    display: 'flex',
    color: '$whiteText',
    gap: '.5rem',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
  '& a svg': {
    fontSize: '1.6rem',
  },
});

export const ProfilePageContainer = styled('div', {
  width: '50%',
  height: '80%',
  backgroundColor: '$gray700',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '.5rem',
});

export const InputArea = styled('div', {
  width: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  padding: '1rem',
});

export const InputElement = styled('input', {
  border: 'none',
  background: 'none',
  outline: 'none',
  backgroundColor: '$gray800',
  color: '$whiteText',
  padding: '.8rem 1rem',
  width: '70%',
  borderRadius: '.3rem',
  fontSize: '1rem',
  '&::placeholder': {
    color: '$whiteText',
  },
});

export const EditButton = styled('button', {
  border: 'none',
  backgroundColor: '$blue700',
  color: '$whiteText',
  padding: '.6rem 1rem',
  fontWeight: '500',
  borderRadius: '.3rem',
  cursor: 'pointer',
  fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '1px',
});
