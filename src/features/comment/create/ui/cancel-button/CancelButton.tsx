import { Button } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import { useCallback } from 'react';

interface Props {
  close(): void;
}
export const CancelButton = ({ close }: Props) => {
  const { handleReset } = useFormikContext();
  const onClick = useCallback(() => {
    handleReset();
    close();
  }, [handleReset, close]);

  return <Button onClick={onClick}>Cancel</Button>;
};
