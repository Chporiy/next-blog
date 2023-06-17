import { Button } from '@chakra-ui/react';
import NextLink from '../../../components/links/NextLink';

const CreatePostButton = () => (
  <NextLink next={{ href: '/posts/new' }}>
    <Button variant="outline" colorScheme="teal">
      Create Post
    </Button>
  </NextLink>
);

export default CreatePostButton;
