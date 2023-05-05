import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { InstagramLogo, TwitterLogo } from 'phosphor-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import nookies from 'nookies';

import { useAuth } from '~/hooks/useAuth';
import { withAuth } from '~/hooks/routes';
import { DefaultLayout } from '~/layouts/Default';
import { db } from '~/services/firebase';

import { Divider } from '~/components/Divider';
import { Avatar } from '~/components/Avatar';
import { Banner } from '~/components/Banner';
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

const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp'
];

const defaultBanner = '/assets/backgrounds/banner.png';

const registerFormSchema = z.object({
  bannerUrl: z
    .any()
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.'
    )
    .optional(),
  institution: z
    .string()
    .min(3, { message: 'O nome da bateria precisa ter pelo menos 3 letras.' }),
  nickname: z
    .string()
    .min(3, { message: 'O apelido precisa ter pelo menos 3 letras.' })
    .optional(),
  bio: z
    .string()
    .min(3, { message: 'A biografia precisa ter pelo menos 3 letras.' }),
  course: z
    .string()
    .min(3, { message: 'O nome do curso precisa ter pelo menos 3 letras.' }),
  birth: z.string().datetime()
});

type RegisterFormsData = z.infer<typeof registerFormSchema>;

const RegisterPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormsData>({
    resolver: zodResolver(registerFormSchema)
  });

  async function handleCompleteRegistration(data: RegisterFormsData) {
    try {
      // await db.collection('users').add({
      //   name: user?.name,
      //   avatar: user?.avatar,
      //   email: user?.email,
      //   bannerUrl: bannerUrl,
      //   institution: institution,
      //   nickname: nickname,
      //   bio: bio,
      //   course: course,
      //   city: city,
      //   twitter: twitter,
      //   instagram: instagram,
      //   onboarded: true
      // });

      console.log(data);

      // router.push('/feed');
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <DefaultLayout title="Register">
      <Container>
        <Banner url={defaultBanner} />

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
              'Nós gostaríamos de dar as boas vindas à <BU> a mais nova plataforma de gerenciamento e interação de baterias universitárias, aqui você pode realizar tarefas do dia a dia da sua bateria como criar eventos, gerir associações de ritmistas além de poder interagir com outras baterias e outros ritmistas.  É um prazer ter você por aqui, esperamos que você tenha uma experiência sensacional aqui na plataforma e para isso precisamos que você complete seu cadastro abaixo.'
            }
          </Description>

          <Form onSubmit={handleSubmit(handleCompleteRegistration)}>
            <ImageInput
              // handleSetBanner={setBannerUrl}
              // handleSetBanner={...register('bannerUrl').onChange()}
              label={'Uma imagem de capa para seu perfil'}
              {...register('bannerUrl')}
            />
            <TextInput
              label={'Sua bateria'}
              placeholder={'ex: Bateria UFUteria'}
              {...register('institution')}
            />

            {/* <input type="text" {...register('institution')} /> */}

            <p>{errors.institution?.message}</p>

            <TextInput
              label={'Seu apelido na bateria'}
              placeholder={'ex: McLovin'}
              {...register('nickname')}
            />
            <p>{errors.nickname?.message}</p>

            <TextareaInput
              label={'Uma descrição sobre você'}
              placeholder={
                'ex: Mineiro, dono do carreteiro mais manco e da gargalhada mais errada da minha rua'
              }
              {...register('bio')}
            />

            <TextInput
              label={'Seu curso de graduação'}
              placeholder={'ex: Ciência da Computação'}
            />

            <TextInput label={'Sua cidade'} placeholder={'ex: Uberlândia'} />

            <TextInput
              label={'Sua data de nascimento'}
              placeholder={'ex: 25/08/2000'}
              {...register('birth')}
            />

            <Socials>
              <TextInput
                icon={<TwitterLogo size={24} weight="fill" />}
                label={'Suas redes sociais'}
                placeholder={'seu @ do Twitter'}
              />
              <TextInput
                icon={<InstagramLogo size={24} weight="fill" />}
                placeholder={'seu @ do Instagram'}
              />
            </Socials>

            <Button type="submit">Finalizar</Button>
          </Form>
        </Content>
      </Container>
    </DefaultLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const cookies = nookies.get(ctx);
  // const token = cookies['@bu:token'];

  // const user = await db
  //   .collection('users')
  //   .where('email', '==', token)
  //   .get()
  //   .then((users) => {
  //     const user = users.docs[0].data();
  //     return user;
  //   });

  // const hasAlreadyRegistered = user.onboarded;

  // if (hasAlreadyRegistered) {
  //   return {
  //     redirect: {
  //       destination: '/feed',
  //       permanent: false
  //     }
  //   };
  // }
  return {
    props: {}
  };
};

export const Register = withAuth(RegisterPage);
