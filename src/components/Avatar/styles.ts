import { styled } from 'styles';
import * as Avatar from '@radix-ui/react-avatar';

export const Container = styled(Avatar.Root, {
  display: 'flex',
  margin: '0 auto',
  justifyContent: 'center',

  border: '3px solid $bu-primary',
  borderRadius: '$full',
  overflow: 'hidden',

  variants: {
    size: {
      xs: {
        width: '$6',
        height: '$6',
        borderWidth: '1px'
      },
      sm: {
        width: '$12',
        height: '$12',
        borderWidth: '1px'
      },
      md: {
        width: '110px',
        height: '110px',
        borderWidth: '2px'
      },
      lg: {
        width: '150px',
        height: '150px'
      },
      xl: {
        width: '180px',
        height: '180px'
      }
    }
  }
});

export const Image = styled(Avatar.Image, {});

export const Fallback = styled(Avatar.Fallback, {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  border: '3px solid $bu-primary',
  borderRadius: '$full',
  backgroundColor: '$bu-tertiary',

  fontSize: '$2xl'
});
