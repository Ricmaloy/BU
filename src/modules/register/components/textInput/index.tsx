import { ComponentProps, ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  Container,
  LabelStyled,
  InputContainer,
  Icon,
  Input,
  ErrorMessage
} from './styles';

type TextInputProps = ComponentProps<typeof Input> & {
  label?: string;
  icon?: ReactElement;
  name: string;
};

export const TextInput = ({ label, icon, name, ...rest }: TextInputProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const error = errors[name]?.message as string;

  return (
    <Container>
      {label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}

      <InputContainer error={!!error}>
        {icon && <Icon htmlFor={name}>{icon}</Icon>}

        <Input id={name} type="text" {...register(name)} {...rest} />
      </InputContainer>
      <ErrorMessage>{error}</ErrorMessage>
    </Container>
  );
};

TextInput.displayName = 'TextInput';
