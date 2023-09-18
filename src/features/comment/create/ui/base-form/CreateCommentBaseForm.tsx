import { Formik, FormikConfig, Form as FormikForm, FormikProps } from 'formik';
import { ReactNode, useCallback } from 'react';

import { useCreateCommentMutation } from '~/entities/comment';
import { userModel } from '~/entities/user';

import { Comment } from '~/shared/model';

import { createCommentDto } from '../../lib';
import { getFixedCacheKey } from '../../lib/getFixedCacheKey';
import { initialValues, schema } from '../../model';

type Values = typeof initialValues;

interface Props {
  postId: Comment['postId'];
  commentId: Comment['commentId'];
  children(formikValues: FormikProps<Values>): ReactNode;
}

export const CreateCommentBaseForm = ({
  postId,
  commentId,
  children,
}: Props) => {
  const [create] = useCreateCommentMutation({
    fixedCacheKey: getFixedCacheKey(commentId),
  });
  const user = userModel.selectors.useCurrentUser();
  const onSubmit: FormikConfig<Values>['onSubmit'] = useCallback(
    async (values, { resetForm }) => {
      const comment = createCommentDto({
        ...values,
        postId,
        commentId,
        userId: user.id,
      });

      const result = await create(comment).unwrap();

      if (result) {
        resetForm();
      }
    },
    [postId, commentId, user, create],
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {(formikProps) => <FormikForm>{children(formikProps)}</FormikForm>}
    </Formik>
  );
};
