import { styled } from 'styles';
import * as Separator from '@radix-ui/react-separator';

export const DividerStyled = styled(Separator.Root, {
  width: '100%',
  height: '1px',
  backgroundColor: '$grey-200'
});
