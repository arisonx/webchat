import { styled } from '@/styles/config';

export const LoadingContainer = styled('div', {
  borderRadius: '.8rem',
  width: '15rem',
  padding: '.6rem 0',
  backgroundColor: '$puplePrimary',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.4rem',
  position:"absolute",
  left:"4rem",
  top:"7rem",
  '& p': {
    color: '$whiteLight',
    fontSize: '1rem',
  },
});
