import { keyframes, styled } from '@/styles/config';
const shake = keyframes({
  '0%': { transform: 'translateX(3px)' },
  '10%': { transform: 'translateX(-3px)' },
  '20%': { transform: 'translateX(-3px)' },
  '40%': { transform: 'translateX(3px)' },
  '60%': { transform: 'translateX(-3px)' },
  '80%': { transform: 'translateX(3px)' },
  '100%': { transform: 'translateY(0px) translateX(0px)' },
});

export const UserDataErrorContainer = styled('div', {
  backgroundColor: '$alertRedLight',
  border: 'none',
  width: '24rem',
  display: 'flex',
  padding: ' .6rem 1rem ',
  justifyContent: 'space-between',
  textAlign: 'center',
  alignItems: 'center',
  borderRadius: '.4rem',
  position: 'absolute',
  left: '5%',
  top: '5%',
  animation: `${shake} 300ms`,
  zIndex: 4,
  '& p': {
    color: '$alertRedBase',
    fontSize: '1rem',
    fontWeight: '400',
  },
  '& svg': {
    color: '$alertRedDark',
    cursor: 'pointer',
    fontSize: '1rem',
  },
});
