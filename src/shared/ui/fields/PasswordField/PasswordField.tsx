import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react';

import { BaseField, BaseFieldProps } from '../BaseField/BaseField';

/**
 * A wrapper around <BaseField />
 * Insert chakra-ui <Input /> as a password field in <FormControls />
 * Can change a password visability
 *
 * @param {BaseFieldProps} props
 */
export const PasswordField = (props: BaseFieldProps) => {
  const [show, setShow] = useState(false);

  return (
    <BaseField {...props}>
      {(inputProps) => (
        <InputGroup>
          <Input {...inputProps} pr="16" type={show ? 'text' : 'password'} />
          <InputRightElement w="16">
            <Button size="sm" onClick={() => setShow(!show)}>
              {show ? 'hide' : 'show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      )}
    </BaseField>
  );
};
