import { SchemaOf, object, string } from 'yup';

import { CreatePostRequest } from '~/entities/post';

export const schema: SchemaOf<Pick<CreatePostRequest, 'title' | 'body'>> =
  object({
    title: string().required(),
    body: string().required(),
    preview: string().required(),
  });
