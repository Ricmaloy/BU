import Image from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { MagnifyingGlass } from 'phosphor-react';
import { v4 } from 'uuid';

import { useAuth } from '~/hooks/useAuth';
import { storage } from '~/services/firebase';

import { Container, LabelStyled, FileInput, BannerContainer } from './styled';

type ImageInputProps = {
  label?: string;
  handleSetBanner: (value: string) => void;
};

export const ImageInput = ({ label, handleSetBanner }: ImageInputProps) => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { user } = useAuth();

  const [imageUrl, setImageUrl] = useState('');
  const [progress, setProgress] = useState(0);

  function handleUpload(event: ChangeEvent<HTMLInputElement>) {
    if (!event.currentTarget.files || !user) return;

    const file = event.currentTarget.files[0];
    const bannerSlug = `${user.name
      .toLocaleLowerCase()
      .replaceAll(' ', '-')}-banner-${v4()}`;

    const storageRef = ref(storage, `banners/${bannerSlug}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImageUrl(url);
          handleSetBanner(url);
        });
      }
    );
  }

  const handleFileInputClick = () => {
    imageInputRef.current?.click();
  };

  return (
    <Container>
      {label && <LabelStyled htmlFor="imageInput">{label}</LabelStyled>}

      <input
        type="file"
        id="imageInput"
        ref={imageInputRef}
        onChange={handleUpload}
      />

      {!imageUrl && (
        <FileInput onClick={handleFileInputClick}>
          {progress === 0 ? (
            <>
              <MagnifyingGlass size={24} weight="bold" />
              <p>Clique aqui para adicionar</p>
            </>
          ) : (
            <progress value={progress} max="100" />
          )}
        </FileInput>
      )}
      {imageUrl && (
        <BannerContainer>
          <Image
            src={imageUrl}
            alt="Banner image for User profile"
            fill
            style={{ objectFit: 'cover' }}
          />
        </BannerContainer>
      )}
    </Container>
  );
};
