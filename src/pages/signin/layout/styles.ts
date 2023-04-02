import { keyframes, styled } from '@/styles/config';

const Hello = keyframes({
  from: {
    transform: 'translatex(10px) rotate(44deg)',
  },
  to: {
    transform: 'translatex(-10px) rotate(-14deg)',
  },
});

//------------------Container------------------------>
export const Container = styled('div', {
  width: ' 90%',
  height: '100%',
  display: ' flex',
  alignItems: 'center',
  flexDirection: ' column',
  paddingTop: '4% ',
});

//------------------START------------------------>

export const Start = styled('section', {
  width: '100%',
  height: '170px',
  display: ' flex',
  flexDirection: ' column',
  alignItems: 'center',
  gap: '2rem',
  padding: '0 2%',

  '& span': {
    height: '2px',
    backgroundColor: '$blueDarkLight',
    width: '80%',
  },
  '& h1': {
    color: '$whiteTextSecondary',
    fontSize: '1.4rem',
    fontWeight: '400',
    display: 'flex',
    alignItems: 'center',
    gap: ' .5rem',
    '& img': {
      width: '50px',
      animation: `${Hello} 2s infinite`,
      animationPlayState: 'running',
      animationFillMode: 'backwards',
      animationTimingFunction: 'ease-in-out',
      animationDirection: 'alternate',
    },
  },
  '& p': {
    color: '$whiteTextSecondary',
    display: 'flex',
    fontSize: '1rem',
    fontWeight: '300',
    gap: '.5rem',
    '& svg': {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
  },
});