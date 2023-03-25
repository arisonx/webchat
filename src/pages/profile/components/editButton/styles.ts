import { styled } from '@/styles/config';

export const EditButton = styled('button', {
  border: 'none',
  backgroundColor: '$blue700',
  color: '$whiteText',
  padding: '.6rem 1.2rem',
  fontWeight: '400',
  borderRadius: '.3rem',
  cursor: 'pointer',
  fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '1px',
  gap: '.2rem',
  '& .hidden': {
    display: 'none',
  },

  '& svg': {
    color: 'DarkTurquoise',
  },

  '&::focus': {
    outline: '2px solid green',
  },
});
