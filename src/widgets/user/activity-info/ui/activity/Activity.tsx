import { Tab } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  text: string;
}
export const Activity = ({ icon, text }: Props) => (
  <Tab p="2" gap="2" justifyContent="start">
    {icon}
    {text}
  </Tab>
);
