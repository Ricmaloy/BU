import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { InstagramLogo, TwitterLogo } from 'phosphor-react';

import { useAuth } from '~/hooks/useAuth';
import { withAuth } from '~/hooks/routes';
import { DefaultLayout } from '~/layouts/Default';
import { db } from '~/services/firebase';

import { Divider } from '~/components/Divider';
import { Avatar } from '~/components/Avatar';
import { Banner } from './components/banner';
import { ImageInput } from './components/imageInput';
import { TextInput } from './components/textInput';
import { TextareaInput } from './components/textareaInput';

import {
  Container,
  Content,
  Greetings,
  Description,
  Form,
  Socials,
  Button
} from './styles';

const RegisterPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  const [bannerUrl, setBannerUrl] = useState('/assets/backgrounds/banner.png');
  const [institution, setInstitution] = useState('');
  const [nickname, setNickname] = useState('');
  const [bio, setBio] = useState('');
  const [course, setCourse] = useState('');
  const [city, setCity] = useState('');
  const [birthday, setBirthday] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');

  async function handleCompleteRegistration() {
    try {
      //   console.log({
      //     name: user?.name,
      //     avatar: user?.avatar,
      //     bannerUrl,
      //     institution,
      //     nickname,
      //     bio,
      //     course,
      //     city,
      //     twitter,
      //     instagram
      //   });

      await db.collection('users').add({
        name: user?.name,
        avatar: user?.avatar,
        email: user?.email,
        bannerUrl: bannerUrl,
        institution: institution,
        nickname: nickname,
        bio: bio,
        course: course,
        city: city,
        twitter: twitter,
        instagram: instagram,
        onboarded: true
      });

      router.push('/feed');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <DefaultLayout title="Register">
      <Container>
        <Banner url={bannerUrl} />

        <Divider />

        <Content>
          <Avatar
            name={user?.name || ''}
            avatarUrl={user?.avatar || ''}
            size={'xl'}
          />

          <Greetings>
            <h1>Bem-vindo(a)</h1>
            <p>{user?.name}</p>
          </Greetings>

          <Description>
            {
              'N??s gostar??amos de dar as boas vindas ?? <BU> a mais nova plataforma de gerenciamento e intera????o de baterias universit??rias, aqui voc?? pode realizar tarefas do dia a dia da sua bateria como criar eventos, gerir associa????es de ritmistas al??m de poder interagir com outras baterias e outros ritmistas.  ?? um prazer ter voc?? por aqui, esperamos que voc?? tenha uma experi??ncia sensacional aqui na plataforma e para isso precisamos que voc?? complete seu cadastro abaixo.'
            }
          </Description>

          <Form>
            <ImageInput
              handleSetBanner={setBannerUrl}
              label={'Uma imagem de capa para seu perfil'}
            />

            <TextInput
              label={'Sua bateria'}
              name={'institution'}
              onChange={(ev) => setInstitution(ev.target.value)}
              placeholder={'ex: Bateria UFUteria'}
              value={institution}
            />

            <TextInput
              label={'Seu apelido na bateria'}
              name={'nickname'}
              onChange={(ev) => setNickname(ev.target.value)}
              placeholder={'ex: McLovin'}
              value={nickname}
            />

            <TextareaInput
              label={'Uma descri????o sobre voc??'}
              placeholder={
                'ex: Mineiro, dono do carreteiro mais manco e da gargalhada mais errada da minha rua'
              }
              onChange={(ev) => setBio(ev.target.value)}
              value={bio}
            />

            <TextInput
              label={'Seu curso de gradua????o'}
              name={'graduation'}
              onChange={(ev) => setCourse(ev.target.value)}
              placeholder={'ex: Ci??ncia da Computa????o'}
              value={course}
            />

            <TextInput
              label={'Sua cidade'}
              name={'city'}
              onChange={(ev) => setCity(ev.target.value)}
              placeholder={'ex: Uberl??ndia'}
              value={city}
            />

            <TextInput
              label={'Sua data de nascimento'}
              name={'birthday'}
              onChange={(ev) => setBirthday(ev.target.value)}
              placeholder={'ex: 25/08/2000'}
              value={birthday}
            />

            <Socials>
              <TextInput
                icon={<TwitterLogo size={24} weight="fill" />}
                label={'Suas redes sociais'}
                name={'twitter'}
                onChange={(ev) => setTwitter(ev.target.value)}
                placeholder={'seu @ do Twitter'}
                value={twitter}
              />
              <TextInput
                icon={<InstagramLogo size={24} weight="fill" />}
                name={'instagram'}
                onChange={(ev) => setInstagram(ev.target.value)}
                placeholder={'seu @ do Instagram'}
                value={instagram}
              />
            </Socials>

            <Button onClick={handleCompleteRegistration}>Finalizar</Button>
          </Form>
        </Content>
      </Container>
    </DefaultLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  };
};

export const Register = withAuth(RegisterPage);
