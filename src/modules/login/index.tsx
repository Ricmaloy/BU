import { GetServerSideProps } from 'next';
import { useAuth } from '~/hooks/useAuth';
import { Unauthorized } from '~/layouts/Unauthorized';
import { Button } from './components/Button';
import { Carrousel } from './components/Carrousel';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { Form, Title, Description } from './styles';

const LoginPage = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <Unauthorized>
      <Form>
        <Header />

        <Title>Login</Title>
        <Description>
          Por enquanto usaremos sua conta Google para cadastrar na plataforma.
        </Description>

        <Button onClick={signInWithGoogle} />

        <Footer />
      </Form>
      <Carrousel />
    </Unauthorized>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  };
};

export const Login = LoginPage;
