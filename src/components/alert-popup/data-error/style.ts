import { styled } from '@/styles/config';

export const DataErrorContainer = styled('div', {
  display: 'flex',
  alignItems: ' center',
  justifyContent: ' center',
  backgroundColor: '$alertRedLight',
  padding: '.7rem 0',
  width: '100%',
  textAlign: ' center',
  gap: ' .5rem',
  borderRadius: ' .5rem',
  color: '$alertRedBase',
  '& svg': {
    color: '$alertRedDark',
  },
});

export const Progress = styled('progress', {
  width: '90%',
  height: '5px',
  color: '$green900',
  appearance: 'none',
  '&::-webkit-progress-bar': {
    backgroundColor: '$grayDark',
    borderRadius: '5px',
  },
  '&::-webkit-progress-value': {
    backgroundColor: '$alertRedBase',
    borderRadius: '5px',
  },
});