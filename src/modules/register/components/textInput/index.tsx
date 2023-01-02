import { ComponentProps, ElementRef, forwardRef, ReactElement } from 'react';
import { Container, LabelStyled, InputContainer, Icon, Input } from './styles';

type TextInputProps = ComponentProps<typeof Input> & {
  label?: string;
  placeholder?: string;
  error?: boolean;
  icon?: ReactElement;
  name?: string;
};

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ label, placeholder, error, icon, name, ...rest }, forwardedRef) => {
    return (
      <Container>
        {label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}

        <InputContainer error={error}>
          {icon && <Icon htmlFor={name}>{icon}</Icon>}

          <Input
            {...rest}
            id={name}
            type="text"
            ref={forwardedRef}
            placeholder={placeholder}
          />
        </InputContainer>
      </Container>
    );
  }
);

TextInput.displayName = 'TextInput';
