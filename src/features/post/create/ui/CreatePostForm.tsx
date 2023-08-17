import { Box, Button } from '@chakra-ui/react';
import { Field, Form as FormikForm, Formik, FormikConfig } from 'formik';
import { ReactNode, useCallback } from 'react';

import { PostImage, useCreatePostMutation } from '~/entities/post';
import { userModel } from '~/entities/user';

import { TextareaField, UploadImageField } from '~/shared/ui';

import { schema, initialValues } from '../model';

/**
 * A form for create post
 *
 * @returns {ReactNode}
 */
export const Form = () => {
  const [createPost] = useCreatePostMutation();
  const user = userModel.selectors.useCurrentUser();

  const onSubmit: FormikConfig<typeof initialValues>['onSubmit'] = useCallback(
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
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values }) => (
        <FormikForm>
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
        </FormikForm>
      )}
    </Formik>
  );
};
