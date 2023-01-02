import { ComponentProps, ElementRef, forwardRef } from 'react';
import { Container, LabelStyled, TextArea } from './styles';

type TextareaProps = ComponentProps<typeof TextArea> & {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: boolean;
};

export const TextareaInput = forwardRef<
  ElementRef<typeof TextArea>,
  TextareaProps
>(({ name, label, placeholder, error, ...rest }, forwardedRef) => {
  return (
    <Container>
      {label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}

      <TextArea
        {...rest}
        placeholder={placeholder}
        ref={forwardedRef}
        error={error}
      />
    </Container>
  );
});

TextareaInput.displayName = 'textarea';
