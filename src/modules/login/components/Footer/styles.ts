import { styled } from 'styles';
import * as Separator from '@radix-ui/react-separator';

export const Divider = styled(Separator.Root, {
  width: '100%',
  height: '1px',
  marginBottom: '$2',
  marginTop: '$12',
  backgroundColor: '$grey-200'
});

export const Version = styled('span', {
  fontSize: '$xs',
  color: '$grey-200'
});
