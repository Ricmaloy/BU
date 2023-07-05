import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import { InstagramLogo, TwitterLogo } from 'phosphor-react';
import { z, ZodType } from 'zod';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import nookies from 'nookies';

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from '~/services/firebase';

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

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const defaultBanner = '/assets/backgrounds/banner.png';

const registerFormSchema = z.object({
  bannerUrl: z
    // .custom<FileList>((v) => v instanceof FileList)
    .any()
    .refine((files) => !!files.item(0), 'A imagem de capa é obrigatória')
    .refine(
      (files) => files.item(0).size <= MAX_FILE_SIZE,
      `Tamanho máximo de 5MB`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files.item(0).type),
      'Formato de imagem inválido'
    )
    .transform((files) => {
      return files.item(0);
    }),
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
  city: z
    .string()
    .min(3, { message: 'O nome do curso precisa ter pelo menos 3 letras.' }),
  birth: z.string().min(8, { message: 'A data deve ser um válido' }),
  twitter: z.string().optional(),
  instagram: z.string().optional()
});

type RegisterFormsData = z.infer<typeof registerFormSchema>;

const RegisterPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  const [banner, setBanner] = useState('');

  const registerForm = useForm<RegisterFormsData>({
    resolver: zodResolver(registerFormSchema)
  });

  const { handleSubmit, watch } = registerForm;

  const bannerInput = watch('bannerUrl');

  useEffect(() => {
    if (bannerInput?.length) {
      const key: File = bannerInput;
      console.log(Object.values(key)[0]);
      const blob = new Blob([Object.values(key)[0]], { type: 'image/*' });
      const url = URL.createObjectURL(blob);
      setBanner(url);
    }
  }, [bannerInput]);

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

      console.log({ data });

      // router.push('/feed');
    } catch (err) {
      console.log(err);
    }
  }

  function onDeleteBannerImage() {
    setBanner('');
  }

  return (
    <DefaultLayout title="Register">
      <Container>
        <Banner url={banner ? banner : defaultBanner} />

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
          <FormProvider {...registerForm}>
            <Form onSubmit={handleSubmit(handleCompleteRegistration)}>
              <ImageInput
                label={'Uma imagem de capa para seu perfil'}
                name={'bannerUrl'}
                url={banner}
                onDeleteImage={onDeleteBannerImage}
              />

              <TextInput
                name={'institution'}
                label={'Sua bateria'}
                placeholder={'ex: Bateria UFUteria'}
              />

              <TextInput
                label={'Seu apelido na bateria'}
                placeholder={'ex: McLovin'}
                name={'nickname'}
              />

              <TextareaInput
                name={'bio'}
                label={'Uma descrição sobre você'}
                placeholder={
                  'ex: Mineiro, dono do carreteiro mais manco e da gargalhada mais errada da minha rua'
                }
              />

              <TextInput
                label={'Seu curso de graduação'}
                placeholder={'ex: Ciência da Computação'}
                name={'course'}
              />

              <TextInput
                label={'Sua cidade'}
                placeholder={'ex: Uberlândia'}
                name={'city'}
              />

              <TextInput
                label={'Sua data de nascimento'}
                placeholder={'ex: 25/08/2000'}
                name={'birth'}
              />

              <Socials>
                <TextInput
                  icon={<TwitterLogo size={24} weight="fill" />}
                  label={'Suas redes sociais'}
                  placeholder={'seu @ do Twitter'}
                  name={'twitter'}
                />
                <TextInput
                  icon={<InstagramLogo size={24} weight="fill" />}
                  placeholder={'seu @ do Instagram'}
                  name={'instagram'}
                />
              </Socials>

              <Button type="submit">Finalizar</Button>
            </Form>
          </FormProvider>
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
