import { styled } from 'styles';

export const Container = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  position: 'relative'
});

export const Title = styled('div', {
  fontSize: '$6xl',
  color: '$white',
  fontFamily: '$default',
  fontWeight: '$bold'
});

export const Arrow = styled('span', {
  fontSize: '$6xl',
  color: '$bu-primary',
  fontFamily: '$secondary',
  fontWeight: '$bold'
});

export const Coding = styled('div', {
  width: '272px',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  position: 'absolute',
  zIndex: '-1',
  opacity: '0.1',

  div: {
    display: 'flex',
    gap: '$2'
  }
});

export const CodeLine = styled('span', {
  width: '100%',
  height: '15px',
  backgroundColor: '#55585B',
  borderRadius: '5px'
});
