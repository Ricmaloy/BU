import { GoogleLogo } from 'phosphor-react';
import { Container } from './styles';

export const Button = () => {
  return (
    <Container>
      <div>
        <GoogleLogo size={24} weight={'bold'} />
      </div>
      <p>Entrar com Google</p>
    </Container>
  );
};
