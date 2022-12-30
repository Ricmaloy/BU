import { ReactNode } from 'react';

import { Container } from './styles';

type LayoutProps = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};
