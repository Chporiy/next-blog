import { List as ChakraList, ListItem } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Item {
  id: string;
}

interface Props<T extends Item> {
  items: T[];
  children(item: T): ReactNode;
}

export const List = <T extends Item>({ items, children }: Props<T>) => (
  <ChakraList spacing="4">
    {items.map((item) => (
      <ListItem key={item.id}>{children(item)}</ListItem>
    ))}
  </ChakraList>
);
