import { Field, Form, Formik } from 'formik';

import { render, screen } from '~/tests/utils';

import PasswordField from './PasswordField';

describe('<PasswordField>', () => {
  it('should switch an input type', async () => {
    const { user } = render(
      <Formik initialValues={{ password: '' }} onSubmit={jest.fn()}>
        <Form>
          <Field component={PasswordField} name="password" label="password" />
        </Form>
      </Formik>,
    );

    const button = screen.getByRole('button');
    const field = screen.getByLabelText('password') as HTMLInputElement;

    await user.click(button);

    expect(field.type).toEqual('text');
    expect(screen.getByText('hide')).toBeInTheDocument();

    await user.click(button);

    expect(field.type).toEqual('password');
    expect(screen.getByText('show')).toBeInTheDocument();
  });
});
