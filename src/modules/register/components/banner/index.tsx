import Image from 'next/image';
import { Container } from './styles';

type BannerProps = {
  url: string;
};

export const Banner = ({ url }: BannerProps) => {
  return (
    <Container>
      <Image
        src={url}
        alt="Banner image for User profile"
        fill
        style={{ objectFit: 'cover' }}
      />
    </Container>
  );
};
