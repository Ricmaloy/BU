import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { withAuth } from '~/hooks/routes';
import { useAuth } from '~/hooks/useAuth';
import { Container } from './styles';

const FeedPage = () => {
  const router = useRouter();
  const { signOut, loading, user } = useAuth();

  // useEffect(() => {
  //   if (!loading && !user) {
  //     router.push('login');
  //   }
  // }, [loading, router, user]);

  return (
    <Container>
      <p>Feed page</p>
      <button onClick={signOut}>Sair</button>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  };
};

export const Feed = withAuth(FeedPage);
