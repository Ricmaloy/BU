import Image from 'next/image';
import { ChangeEvent, ComponentProps, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { MagnifyingGlass } from 'phosphor-react';
import { useAuth } from '~/hooks/useAuth';
import CloseIcon from 'public/assets/icons/close.svg';

import {
  Container,
  LabelStyled,
  FileInput,
  BannerContainer,
  ImageFileInput,
  ErrorMessage,
  DeleteImageButton
} from './styled';

type ImageInputProps = ComponentProps<typeof ImageFileInput> & {
  label?: string;
  url: string;
  name: string;
  onDeleteImage: () => void;
};

export const ImageInput = ({
  label,
  name,
  onDeleteImage,
  url,
  ...rest
}: ImageInputProps) => {
  const { user } = useAuth();

  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const {
    register,
    formState: { errors }
  } = useFormContext();

  const error = errors[name]?.message as string;

  function handleUpload(event: ChangeEvent<HTMLInputElement>) {
    if (!event.currentTarget.files || !user) return;

    // const file = event.currentTarget.files[0];
    // const bannerSlug = `${user.name
    //   .toLocaleLowerCase()
    //   .replaceAll(' ', '-')}-banner-${v4()}`;

    // const storageRef = ref(storage, `banners/${bannerSlug}`);
    // const uploadTask = uploadBytesResumable(storageRef, file);

    // uploadTask.on(
    //   'state_changed',
    //   (snapshot) => {
    //     const progress =
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     setProgress(progress);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((url) => {
    //       setImageUrl(url);
    //       // handleSetBanner(url);
    //     });
    //   }
    // );
  }

  function handleDeleteImage() {
    onDeleteImage();
  }

  return (
    <Container>
      {label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}

      {!url && (
        <>
          <FileInput error={!!error}>
            {!progress && (
              <ImageFileInput
                type="file"
                id={name}
                {...rest}
                {...register(name)}
              />
            )}

            {progress === 0 ? (
              <>
                <MagnifyingGlass size={24} weight="bold" />
                <p>Clique aqui para adicionar</p>
              </>
            ) : (
              <progress value={progress} max="100" />
            )}
          </FileInput>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </>
      )}

      {url && (
        <BannerContainer
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Image
            src={url}
            alt="Banner image for User profile"
            fill
            style={{ objectFit: 'cover' }}
          />
          {isHovering && (
            <DeleteImageButton onClick={handleDeleteImage}>
              <Image src={CloseIcon} width={16} height={16} alt="" />
            </DeleteImageButton>
          )}
        </BannerContainer>
      )}
    </Container>
  );
};

ImageInput.displayName = 'ImageInput';

// export const ImageInput = ({ label, handleSetBanner }: ImageInputProps) => {
//   const imageInputRef = useRef<HTMLInputElement>(null);
//   const { user } = useAuth();

//   const [imageUrl, setImageUrl] = useState('');
//   const [progress, setProgress] = useState(0);
//   //console.log(imageUrl);

//   function handleUpload(event: ChangeEvent<HTMLInputElement>) {
//     if (!event.currentTarget.files || !user) return;

//     const file = event.currentTarget.files[0];
//     const bannerSlug = `${user.name
//       .toLocaleLowerCase()
//       .replaceAll(' ', '-')}-banner-${v4()}`;

//     const storageRef = ref(storage, `banners/${bannerSlug}`);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(
//       'state_changed',
//       (snapshot) => {
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         setProgress(progress);
//       },
//       (error) => {
//         console.log(error);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((url) => {
//           setImageUrl(url);
//           // handleSetBanner(url);
//         });
//       }
//     );
//   }

//   const handleFileInputClick = () => {
//     imageInputRef.current?.click();
//   };

//   return (
//     <Container>
//       {label && <LabelStyled htmlFor="imageInput">{label}</LabelStyled>}

//       <input
//         type="file"
//         id="imageInput"
//         ref={imageInputRef}
//         onChange={handleUpload}
//       />

//       {!imageUrl && (
//         <FileInput onClick={handleFileInputClick}>
//           {progress === 0 ? (
//             <>
//               <MagnifyingGlass size={24} weight="bold" />
//               <p>Clique aqui para adicionar</p>
//             </>
//           ) : (
//             <progress value={progress} max="100" />
//           )}
//         </FileInput>
//       )}
//       {imageUrl && (
//         <BannerContainer>
//           <Image
//             src={imageUrl}
//             alt="Banner image for User profile"
//             fill
//             style={{ objectFit: 'cover' }}
//           />
//         </BannerContainer>
//       )}
//     </Container>
//   );
// };
