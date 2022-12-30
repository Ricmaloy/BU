import { styled } from 'styles';

export const Container = styled('header', {
  width: '100%',
  minWidth: '280px',
  display: 'flex',
  gap: '$3',

  p: {
    fontSize: '$6xl',
    fontWeight: 'bold',
    color: '$white',
    lineHeight: '80px'
  },

  span: {
    fontFamily: '$secondary',
    fontSize: '$6xl',
    fontWeight: 'bold',
    color: '$bu-primary'
  }
});
