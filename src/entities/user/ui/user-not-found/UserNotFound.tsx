import { Avatar, Flex, Text } from '@chakra-ui/react';

export const UserNotFound = () => (
  <Flex>
    <Avatar mr="3" />
    <Text fontWeight="medium">User not found</Text>
  </Flex>
);
