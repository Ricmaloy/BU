import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from './useAuth';
import { Loader } from '~/components/Loader';

export function withAuth(Component: React.ComponentType<any>) {
  const Wrapper = (props: any) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push('/login');
      }
    }, [router, loading, user]);

    if (loading || !user) {
      return <Loader />;
    }

    return <Component {...props} />;
  };

  return Wrapper;
}
