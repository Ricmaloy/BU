import { styled } from 'styles';

export const Form = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',

  backgroundColor: '$background-base',
  height: '100%',
  flex: 1,
  borderRadius: '5px 0 0 5px',
  padding: '$8',

  '@mobile': {
    padding: '$12',
    maxWidth: '376px',
    maxHeight: '526px'
  }
});

export const Title = styled('h1', {
  fontSize: '$2xl',
  color: '$white',
  marginTop: '$12'
});

export const Description = styled('p', {
  fontSize: '$md',
  color: '$grey-200',
  marginTop: '$4',
  lineHeight: '24px'
});
