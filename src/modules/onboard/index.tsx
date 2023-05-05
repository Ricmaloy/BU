import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import nookies from 'nookies';
import { withAuth } from '~/hooks/routes';
import { InstagramLogo, TwitterLogo } from 'phosphor-react';
import { DefaultLayout } from '~/layouts/Default';
import { db } from '~/services/firebase';

import { Divider } from '~/components/Divider';
import { Avatar } from '~/components/Avatar';
import { Banner } from '~/components/Banner';

import {
  Container,
  Content,
  Title,
  Subtitle,
  UserInfos,
  Info,
  Label,
  Text,
  Socials,
  SocialItem,
  InstitutionCard
} from './styles';

type UserData = {
  bio: string;
  name: string;
  institution: string;
  avatar: string;
  email: string;
  onboarded: boolean;
  instagram: string;
  bannerUrl: string;
  course: string;
  twitter: string;
  birth: string;
  city: string;
  nickname: string;
};

type InstitutionData = {
  name: string;
  slug: string;
  description: string;
  avatarUrl: string;
};

type OnboardPageProps = {
  user: UserData;
  institution: InstitutionData;
};

const OnboardPage = ({ user, institution }: OnboardPageProps) => {
  return (
    <DefaultLayout title="Onboard">
      <Container>
        <Banner url={user.bannerUrl} />

        <Divider />

        <Content>
          <Avatar
            name={user?.name || ''}
            avatarUrl={user?.avatar || ''}
            size={'xl'}
          />

          <Title>{user.name}</Title>
          <Subtitle>{user.nickname}</Subtitle>

          <UserInfos>
            <Info>
              <Label>Sobre</Label>
              <Text>{user.bio}</Text>
            </Info>

            <Info>
              <Label>Curso de Graduação</Label>
              <Text>{user.course}</Text>
            </Info>

            <Info>
              <Label>Cidade</Label>
              <Text>{user.city}</Text>
            </Info>

            <Info>
              <Label>Data de nascimento</Label>
              <Text>{user.birth}</Text>
            </Info>

            <Info>
              <Label>Redes sociais</Label>
              <Socials>
                {user.twitter && (
                  <SocialItem
                    href={`https://twitter.com/${user.twitter}`}
                    target="_blank"
                  >
                    <TwitterLogo color="#C6C6C6" size={24} weight="fill" />
                  </SocialItem>
                )}
                {user.instagram && (
                  <SocialItem
                    href={`https://instagram.com/${user.instagram}`}
                    target="_blank"
                  >
                    <InstagramLogo color="#C6C6C6" size={24} />
                  </SocialItem>
                )}
              </Socials>
            </Info>

            <Info>
              <Label>Sua bateria</Label>

              <InstitutionCard>
                <Avatar
                  name={institution.name}
                  avatarUrl={institution.avatarUrl}
                  size={'lg'}
                />
                <div>
                  <p>{institution.name}</p>
                  <span>{institution.description}</span>
                </div>
              </InstitutionCard>
            </Info>
          </UserInfos>
        </Content>
      </Container>
    </DefaultLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const cookies = nookies.get(ctx);
  const token = cookies['@bu:token'];

  const user = await db
    .collection('users')
    .where('email', '==', token)
    .get()
    .then((users) => {
      const user = users.docs[0].data();
      // return {
      //   ...user
      //   // birth: JSON.stringify(user.birth.toDate())
      // };
      return user;
    });

  const institution = await db
    .collection('institutions')
    .where('name', '==', user.institution)
    .get()
    .then((institutions) => {
      const institution = institutions.docs[0].data();

      return institution;
    });

  return {
    props: {
      user,
      institution
    }
  };
};

export const Onboard = withAuth(OnboardPage);
