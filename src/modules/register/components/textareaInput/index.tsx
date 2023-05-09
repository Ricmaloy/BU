import { ComponentProps, ElementRef, forwardRef } from 'react';
import { Container, LabelStyled, TextArea, ErrorMessage } from './styles';

type TextareaProps = ComponentProps<typeof TextArea> & {
  name?: string;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
};

export const TextareaInput = forwardRef<
  ElementRef<typeof TextArea>,
  TextareaProps
>(({ name, label, placeholder, errorMessage, ...rest }, forwardedRef) => {
  return (
    <Container>
      {label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}

      <TextArea
        {...rest}
        placeholder={placeholder}
        ref={forwardedRef}
        name={name}
        error={!!errorMessage}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
});

TextareaInput.displayName = 'textarea';
