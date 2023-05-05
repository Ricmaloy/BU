import { ComponentProps, ElementRef, forwardRef, ReactElement } from 'react';
import { Container, LabelStyled, InputContainer, Icon, Input } from './styles';

type TextInputProps = ComponentProps<typeof Input> & {
  label?: string;
  error?: boolean;
  icon?: ReactElement;
  name?: string;
};

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ label, error, icon, name, ...props }, ref) => {
    return (
      <Container>
        {label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}

        <InputContainer error={error}>
          {icon && <Icon htmlFor={name}>{icon}</Icon>}

          <Input id={name} name={name} type="text" ref={ref} {...props} />
        </InputContainer>
      </Container>
    );
  }
);

TextInput.displayName = 'TextInput';
