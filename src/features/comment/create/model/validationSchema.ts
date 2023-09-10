import { SchemaOf, object, string } from 'yup';

import { CreateCommentRequest } from '~/entities/comment';

export const schema: SchemaOf<Pick<CreateCommentRequest, 'body'>> = object({
  body: string().required(),
});
