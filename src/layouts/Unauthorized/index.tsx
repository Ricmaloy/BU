import { ReactNode } from 'react';
import Head from 'next/head';

import { Container } from './styles';

type LayoutProps = {
  children: ReactNode;
};

export const Unauthorized = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <Container>{children}</Container>
    </div>
  );
};
