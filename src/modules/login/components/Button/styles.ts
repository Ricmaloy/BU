import { styled } from 'styles';

export const Container = styled('button', {
  width: '100%',
  height: '$12',
  display: 'flex',
  alignItems: 'center',

  backgroundColor: 'transparent',
  borderRadius: '5px',
  marginTop: '$16',
  cursor: 'pointer',
  transition: 'filter 0.3s ease',
  overflow: 'hidden',

  '&:hover': {
    filter: 'brightness(0.9)'
  },

  p: {
    height: '100%',
    fontSize: '$md',
    fontWeight: 'bold',
    lineHeight: '24px',
    color: '$white',
    backgroundColor: '#FF7500',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  div: {
    width: '$12',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '1px solid #282828',
    backgroundColor: '$bu-primary',

    svg: {
      color: '$grey-100'
    }
  }
});
