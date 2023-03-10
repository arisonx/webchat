import { styled, keyframes } from '@/styles/config';
const shake = keyframes({
  '0%': { transform: 'translateX(3px)' },
  '10%': { transform: 'translateX(-3px)' },
  '20%': { transform: 'translateX(-3px)' },
  '40%': { transform: 'translateX(3px)' },
  '60%': { transform: 'translateX(-3px)' },
  '80%': { transform: 'translateX(3px)' },
  '100%': { transform: 'translateY(0px) translateX(0px)' },
});

export const AlertButton = styled('button', {
  backgroundColor: '$alertRedLight',
  border: 'none',
  cursor: 'pointer',
  width: '28rem',
  display: 'flex',
  padding: ' .8rem 1rem ',
  justifyContent: 'space-between',
  fontSize: '1rem',
  alignItems: 'center',
  color: '$alertRedDark',
  borderRadius: '.2rem',
  position: 'absolute',
  left: '5%',
  top: '5%',
  animation: `${shake} 300ms`,
  '&:.WarningCircleIcon': {
    color: '$alertRedBase',
    width: '.7rem',
  },
  '&:.Xicon': {
    color: '$alertRedBase',
    width: '.7rem',
  },
});
