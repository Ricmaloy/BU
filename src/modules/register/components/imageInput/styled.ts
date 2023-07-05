import { styled } from 'styles';
import * as Label from '@radix-ui/react-label';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3'

  // input: {
  //   display: 'none'
  // }
});

export const LabelStyled = styled(Label.Root, {
  fontSize: '$sm',
  lineHeight: '22px',
  color: '$white'
});

export const ImageFileInput = styled('input', {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  opacity: 0,
  cursor: 'pointer'
});

export const FileInput = styled('div', {
  width: '100%',
  height: '100px',
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  backgroundColor: 'transparent',
  border: '1px solid $grey-200',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'filter 0.3s',

  '&:hover': {
    filter: 'brightness(0.9)'
  },

  svg: {
    color: '$grey-200'
  },

  p: {
    fontSize: '$sm',
    lineHeight: '24px',
    color: '$grey-200'
  },

  variants: {
    error: {
      true: {
        borderColor: '$danger-light'
      }
    }
  }
});

export const BannerContainer = styled('div', {
  width: '100%',
  height: '100px',
  position: 'relative',
  borderRadius: '5px',
  backgroundColor: 'transparent',
  border: '1px solid $grey-200',
  overflow: 'hidden'
});

export const ErrorMessage = styled('p', {
  color: '$danger-light',
  fontSize: '$sm'
});

export const DeleteImageButton = styled('span', {
  zIndex: 9999,
  position: 'absolute',
  top: '5px',
  right: '5px',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  padding: '8px',
  fontSize: '24px',
  fontFamily: '$default',
  cursor: 'pointer',
  borderRadius: '4px'
});
