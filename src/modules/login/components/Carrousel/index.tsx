import {
  Container,
  Wrapper,
  CarrouselContainer,
  CarrouselItem,
  CarrouselActions,
  CarrouselChevron,
  CarrouselItemBars,
  CarrouselBar
} from './styles';
import Image from 'next/image';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { useCallback, useEffect, useState } from 'react';

export const Carrousel = () => {
  const [activeItem, setActiveItem] = useState(1);

  const carrouselAutoChange = useCallback(() => {
    if (activeItem === 2) {
      return setActiveItem(1);
    }

    setActiveItem(2);
  }, [activeItem]);

  const carrouselClickChange = useCallback(() => {
    setActiveItem((prevState) => (prevState % 2) + 1);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(() => {
      carrouselAutoChange();
    }, 3000);

    return () => clearInterval(intervalID);
  }, [carrouselAutoChange]);

  return (
    <Container>
      <Wrapper>
        <CarrouselContainer>
          <CarrouselItem active={activeItem === 1}>
            <Image
              src="/assets/images/aut.png"
              alt="Person"
              width={350}
              height={350}
            />
            <p>Tenha o controle da sua bateria</p>
          </CarrouselItem>

          <CarrouselItem active={activeItem === 2}>
            <Image
              src="/assets/images/wab.png"
              alt="Person"
              width={350}
              height={350}
            />
            <p>Interaja com ritmistas de outas baterias</p>
          </CarrouselItem>
        </CarrouselContainer>
        <CarrouselActions>
          <CarrouselChevron onClick={carrouselClickChange}>
            <CaretLeft size={18} weight="bold" />
          </CarrouselChevron>

          <CarrouselItemBars>
            <CarrouselBar active={activeItem === 1} />
            <CarrouselBar active={activeItem === 2} />
          </CarrouselItemBars>

          <CarrouselChevron onClick={carrouselClickChange}>
            <CaretRight size={18} weight="bold" />
          </CarrouselChevron>
        </CarrouselActions>
      </Wrapper>
    </Container>
  );
};
