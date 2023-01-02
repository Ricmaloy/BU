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

export const TextArea = styled('textarea', {
  width: '100%',
  minHeight: '80px',
  maxHeight: '150px',
  resize: 'vertical',

  backgroundColor: 'transparent',
  border: '1px solid $grey-200',
  borderRadius: '5px',
  padding: '$5',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  outline: 'none',

  variants: {
    error: {
      true: {
        borderColor: '$danger-light'
      }
    }
  }
});
