import { styled } from '@/styles/config';

export const CheckedContainer = styled('div', {
  // border: '2px solid yellow',
  borderRadius: '.8rem',
  width: '22rem',
  padding: '.6rem 0',
  backgroundColor: '$greenSucess',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.4rem',
  position: 'absolute',
  left: '4%',
  top: '6%',
  zIndex: '2',
  '& p': {
    color: '$graySucess',
    fontSize: '1rem',
  },
  '& svg': {
    color: '$green100',
    fontSize: '1.6rem',
  },
});
