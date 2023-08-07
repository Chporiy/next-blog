import { Button } from '@chakra-ui/react';
import NextLink from '../../../components/links/NextLink';
import ROUTES from '../../../utils/routes/routes';

const CreatePostButton = () => (
  <NextLink next={{ href: ROUTES.posts.create }}>
    <Button variant="outline" colorScheme="teal">
      Create Post
    </Button>
  </NextLink>
);

export default CreatePostButton;
