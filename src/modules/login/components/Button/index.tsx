import { GoogleLogo } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ ...rest }: ButtonProps) => {
  return (
    <Container {...rest}>
      <div>
        <GoogleLogo size={24} weight={'bold'} />
      </div>
      <p>Entrar com Google</p>
    </Container>
  );
};
