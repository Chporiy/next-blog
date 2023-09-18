import { Field } from 'formik';

import { Post } from '~/shared/model';
import { TextareaField } from '~/shared/ui';

import { CreateCommentBaseForm } from '../base-form/CreateCommentBaseForm';
import { SubmitButton } from '../submit-button/SubmitButton';

interface Props {
  postId: Post['id'];
}

export const Form = ({ postId }: Props) => (
  <CreateCommentBaseForm postId={postId} commentId="">
    {() => (
      <>
        <Field
          component={TextareaField}
          name="body"
          label="Content"
          placeholder="Add to the discussion"
        />
        <SubmitButton mt="2" />
      </>
    )}
  </CreateCommentBaseForm>
);
