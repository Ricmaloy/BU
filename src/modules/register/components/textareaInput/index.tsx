import { ComponentProps } from 'react';
import { useFormContext } from 'react-hook-form';
import { Container, LabelStyled, TextArea, ErrorMessage } from './styles';

type TextareaProps = ComponentProps<typeof TextArea> & {
  name: string;
  label?: string;
  placeholder?: string;
};

export const TextareaInput = ({ name, label, ...rest }: TextareaProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const error = errors[name]?.message as string;

  return (
    <Container>
      {label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}

      <TextArea id={name} error={!!error} {...register(name)} {...rest} />
      <ErrorMessage>{error}</ErrorMessage>
    </Container>
  );
};

TextareaInput.displayName = 'textarea';
