import { DividerStyled } from './styles';
import { SeparatorProps } from '@radix-ui/react-separator';

export const Divider = ({ ...rest }: SeparatorProps) => {
  return <DividerStyled {...rest} />;
};
