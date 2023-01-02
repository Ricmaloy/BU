import { ReactNode } from 'react';
import Head from 'next/head';
import { Container } from './styles';

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

export const DefaultLayout = ({ title, children }: LayoutProps) => {
  return (
    <Container>
      <Head>
        <title>{title} | BU</title>
      </Head>

      <main>{children}</main>
    </Container>
  );
};
