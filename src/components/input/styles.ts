import { styled } from '@/styles/config';

export const InputElement = styled('input', {
  border: 'none',
  background: 'none',
  outline: 'none',

  backgroundColor: '$gray800',

  color: '$whiteText',
  padding: '.6rem 1rem',

  width: '60%',
  "&::placeholder":{
    color:"$whiteText"
  }
});
