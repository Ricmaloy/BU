import { Container, Image, Fallback } from './styles';

type AvatarProps = {
  name: string;
  avatarUrl: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const Avatar = ({ name, avatarUrl, size }: AvatarProps) => {
  return (
    <Container size={size}>
      <Image src={avatarUrl} alt={`Foto de perfil de ${name}`} />
      <Fallback>{name.split(' ').map((word) => word[0])}</Fallback>
    </Container>
  );
};
