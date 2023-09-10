import { Button } from '@chakra-ui/react';
import { Field, Formik, FormikConfig, Form as FormikForm } from 'formik';
import { useCallback } from 'react';

import {
  CreateCommentRequest,
  useCreateCommentMutation,
} from '~/entities/comment';
import { userModel } from '~/entities/user';

import { Post } from '~/shared/model';
import { TextareaField } from '~/shared/ui';

import { initialValues, schema } from '../model';

interface Props {
  postId: Post['id'];
}

export const Form = ({ postId }: Props) => {
  const [create] = useCreateCommentMutation();
  const user = userModel.selectors.useCurrentUser();

  const onSubmit: FormikConfig<typeof initialValues>['onSubmit'] = useCallback(
    async (values, { resetForm }) => {
      const comment: CreateCommentRequest = {
        ...values,
        postId,
        date: new Date().toISOString(),
        userId: user.id,
      };

      const result = await create(comment).unwrap();

      if (result) {
        resetForm();
      }
    },
    [postId, user, create],
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <Field
            component={TextareaField}
            name="body"
            label="Content"
            placeholder="Add to the discussion"
          />
          <Button
            mt="2"
            type="submit"
            colorScheme="teal"
            isDisabled={isSubmitting}
          >
            Submit
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
};
