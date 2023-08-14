import { Img } from '@chakra-ui/react';

interface Props {
  src: string;
  alt: string;
}

export const Image = ({ src, alt }: Props) => (
  <Img src={src} alt={alt} height="350px" width="full" objectFit="cover" />
);
