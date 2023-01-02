import { Container, Title, Arrow, Coding, CodeLine } from './styles';

export const Loader = () => {
  return (
    <Container>
      <Arrow>{'<'}</Arrow>
      <Title>BU</Title>
      <Arrow>{'>'}</Arrow>

      <Coding>
        <CodeLine css={{ width: '272px' }} />
        <div>
          <CodeLine css={{ width: '39px' }} />
          <CodeLine css={{ width: '17px' }} />
          <CodeLine css={{ width: '77px' }} />
        </div>
        <CodeLine css={{ width: '120px' }} />
        <div>
          <CodeLine css={{ width: '88px', marginLeft: '15px' }} />
          <CodeLine css={{ width: '128px' }} />
        </div>
        <CodeLine css={{ width: '210px' }} />
        <CodeLine css={{ width: '102px' }} />
        <div>
          <CodeLine css={{ width: '160px' }} />
          <CodeLine css={{ width: '60px' }} />
        </div>
        <div>
          <CodeLine css={{ width: '38px' }} />
          <CodeLine css={{ width: '16px' }} />
        </div>
        <div>
          <CodeLine css={{ width: '102px', marginLeft: '15px' }} />
          <CodeLine css={{ width: '140px' }} />
        </div>
        <CodeLine css={{ width: '210px' }} />
      </Coding>
    </Container>
  );
};
