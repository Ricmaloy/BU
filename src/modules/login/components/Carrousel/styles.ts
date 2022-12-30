import { styled } from 'styles';

export const Container = styled('section', {
  height: '0px',
  width: '0.1px',
  overflow: 'hidden',
  borderRadius: '0px 5px 5px 0px',

  '@mobile': {
    width: '100%',
    height: '100%',
    maxHeight: '526px',
    maxWidth: '552px',
    backgroundColor: '$grey-600',
    flex: '6',
    overflow: 'auto'
  }
});

export const Wrapper = styled('section', {
  height: '100%',
  width: '100%',

  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 6,
    padding: '$6'
  }
});

export const CarrouselContainer = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: '400px',
  maxHeight: '400px',
  position: 'relative',
  overflow: 'hidden'
});

export const CarrouselItem = styled('div', {
  width: '100%',
  height: '100%',
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,

  p: {
    maxWidth: '300px',
    textAlign: 'center',
    lineHeight: '$base',
    color: '$white',
    marginTop: '$4'
  },

  variants: {
    active: {
      true: {
        opacity: 1
      }
    }
  }
});

export const CarrouselActions = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$12',
  marginTop: '$12'
});

export const CarrouselChevron = styled('button', {
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: '$grey-400'
});

export const CarrouselItemBars = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2'
});

export const CarrouselBar = styled('button', {
  height: '4px',
  borderRadius: '2px',
  transition: ' width 0.2s',

  variants: {
    active: {
      true: {
        width: '40px',
        backgroundColor: '$bu-primary'
      },
      false: {
        width: '10px',
        backgroundColor: '$bu-tertiary'
      }
    }
  }
});
