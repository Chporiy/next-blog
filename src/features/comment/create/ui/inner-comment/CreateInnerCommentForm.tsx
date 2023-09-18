import { ButtonGroup } from '@chakra-ui/react';
import { Field } from 'formik';
import { useEffect } from 'react';

import {
  useCreateCommentMutation,
  useUpdateParentCommentMutation,
} from '~/entities/comment';

import { Comment, Post } from '~/shared/model';
import { TextareaField } from '~/shared/ui';

import { getFixedCacheKey } from '../../lib/getFixedCacheKey';
import { CreateCommentBaseForm } from '../base-form/CreateCommentBaseForm';
import { CancelButton } from '../cancel-button/CancelButton';
import { SubmitButton } from '../submit-button/SubmitButton';

interface Props {
  postId: Post['id'];
  commentId: Comment['id'];
  close: () => void;
}

export const Form = ({ postId, commentId, close }: Props) => {
  const [updateParentComment] = useUpdateParentCommentMutation();
  const [, { isSuccess, reset }] = useCreateCommentMutation({
    fixedCacheKey: getFixedCacheKey(commentId),
  });

  useEffect(() => {
    if (isSuccess) {
      updateParentComment({
        id: commentId,
        childrenCommentsAmount: 1,
      });
    }
  }, [commentId, isSuccess, updateParentComment]);

  useEffect(() => {
    if (isSuccess) {
      close();
      reset();
    }
  }, [isSuccess, close, reset]);

  return (
    <CreateCommentBaseForm postId={postId} commentId={commentId}>
      {() => (
        <>
          <Field component={TextareaField} name="body" placeholder="Reply..." />
          <ButtonGroup mt="2">
            <SubmitButton />
            <CancelButton close={close} />
          </ButtonGroup>
        </>
      )}
    </CreateCommentBaseForm>
  );
};
