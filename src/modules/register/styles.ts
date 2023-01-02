import { styled } from 'styles';

export const Container = styled('div', {
  maxWidth: '928px',
  width: '85vw',
  backgroundColor: '$background-base',
  borderRadius: '5px',
  overflow: 'hidden'
});

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '0 $8',

  transform: 'translateY(-110px)',

  '@mobile': {
    padding: '0 $12'
  }
});

export const Greetings = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  textAlign: 'center',
  margin: '$6 0 $12',
  color: '$white',

  p: {
    color: '$bu-primary',
    fontSize: '$4xl',
    fontWeight: '$bold'
  }
});

export const Description = styled('p', {
  fontSize: '$sm',
  color: '$grey-200',
  lineHeight: '24px',
  marginBottom: '$12'
});

export const Form = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$7'
});

export const Socials = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2'
});

export const Button = styled('button', {
  width: '290px',
  height: '57px',

  fontFamily: '$default',
  fontWeight: '$bold',
  color: '$bu-secondary',
  borderRadius: '5px',
  border: 'none',
  margin: '0 auto',

  backgroundColor: '$bu-primary',
  cursor: 'pointer',
  transform: 'translateY(35px)',
  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.9)'
  }
});
