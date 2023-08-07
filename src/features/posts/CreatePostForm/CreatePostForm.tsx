import { Field, Form, Formik, FormikConfig } from 'formik';
import { SchemaOf, object, string } from 'yup';
import { ReactNode, useCallback } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useCreatePostMutation } from '../postsApi';
import { CreatePostRequest } from '../types';
import TextareaField from '../../../components/fields/TextareaField/TextareaField';
import useUser from '../../../hooks/useUser/useUser';
import UploadImageField from '../../../components/fields/FileField/UploadImageField';
import PostImage from '../PostImage/PostImage';

const VALIDATION_SCHEMA: SchemaOf<Pick<CreatePostRequest, 'title' | 'body'>> =
  object({
    title: string().required(),
    body: string().required(),
    preview: string().required(),
  });

const INITIAL_VALUES = {
  title: '',
  body: '',
  preview: '',
};

/**
 * A form for create post
 *
 * @returns {ReactNode}
 */
const CreatePostForm = () => {
  const [createPost] = useCreatePostMutation();
  const user = useUser();

  const onSubmit: FormikConfig<typeof INITIAL_VALUES>['onSubmit'] = useCallback(
    async (values, { resetForm }) => {
      const post = {
        ...values,
        userId: user.id,
        date: new Date().toISOString(),
      };

      const result = await createPost(post).unwrap();

      if (result) {
        resetForm();
      }
    },
    [user, createPost],
  );

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <Box mb="4">
            <Field
              component={UploadImageField}
              name="preview"
              label="Preview"
            />
            {values.preview && (
              <Box mt="4">
                <PostImage src={values.preview} alt="Post image" />
              </Box>
            )}
          </Box>
          <Box mb="4">
            <Field
              component={TextareaField}
              name="title"
              label="Title"
              placeholder="New post title here..."
            />
          </Box>
          <Box mb="4">
            <Field
              component={TextareaField}
              name="body"
              label="Content"
              placeholder="Write your post content here..."
            />
          </Box>
          <Button
            type="submit"
            width="full"
            colorScheme="teal"
            isDisabled={isSubmitting}
          >
            Create
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CreatePostForm;
