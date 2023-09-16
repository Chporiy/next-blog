import { Button, ButtonGroup } from '@chakra-ui/react';
import {
  Field,
  Formik,
  FormikConfig,
  Form as FormikForm,
  FormikHandlers,
  FormikHelpers,
} from 'formik';
import { useCallback } from 'react';

import {
  CreateCommentRequest,
  useCreateCommentMutation,
} from '~/entities/comment';
import { userModel } from '~/entities/user';

import { Comment, Post } from '~/shared/model';
import { TextareaField } from '~/shared/ui';

import { initialValues, schema } from '../../model';

interface Props {
  postId: Post['id'];
  commentId: Comment['id'];
  close: () => void;
}

export const Form = ({ postId, commentId, close }: Props) => {
  const [create] = useCreateCommentMutation();
  const user = userModel.selectors.useCurrentUser();

  const onClose = useCallback(
    (
      resetForm:
        | FormikHelpers<typeof initialValues>['resetForm']
        | FormikHandlers['handleReset'],
    ) => {
      resetForm();
      close();
    },
    [close],
  );

  const onSubmit: FormikConfig<typeof initialValues>['onSubmit'] = useCallback(
    async (values, { resetForm }) => {
      const comment: CreateCommentRequest = {
        ...values,
        postId,
        commentId,
        date: new Date().toISOString(),
        userId: user.id,
        childrenCommentsAmount: 0,
      };

      const result = await create(comment).unwrap();

      if (result) {
        onClose(resetForm);
      }
    },
    [postId, commentId, user, create, onClose],
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, handleReset }) => (
        <FormikForm>
          <Field
            component={TextareaField}
            name="body"
            label="Content"
            placeholder="Reply..."
          />
          <ButtonGroup mt="2">
            <Button type="submit" colorScheme="teal" isDisabled={isSubmitting}>
              Submit
            </Button>
            <Button onClick={() => onClose(handleReset)}>Cancel</Button>
          </ButtonGroup>
        </FormikForm>
      )}
    </Formik>
  );
};
