import { styled } from 'styles';
import * as Label from '@radix-ui/react-label';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3'
});

export const LabelStyled = styled(Label.Root, {
  fontSize: '$sm',
  lineHeight: '22px',
  color: '$white'
});

export const InputContainer = styled('div', {
  width: '100%',
  height: '58px',
  border: '1px solid $grey-200',
  borderRadius: '5px',
  display: 'flex',

  svg: {
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

export const Icon = styled(Label.Root, {
  width: '57px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  '&::after': {
    content: '',
    width: '1px',
    height: '32px',
    backgroundColor: '$grey-200',
    position: 'absolute',
    right: '0'
  }
});

export const Input = styled('input', {
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
  paddingLeft: '$6',
  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',
  outline: 'none'
});

export const ErrorMessage = styled('p', {
  color: '$danger-light',
  fontSize: '$sm'
});
