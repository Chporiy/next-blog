import email from './email';

describe('email validation schema', () => {
  it('should validate right email', async () => {
    expect(await email.isValid('test@mail.com')).toBeTruthy();
  });

  it('should trim email', async () => {
    expect(await email.validate(' test@mail.com ')).toEqual('test@mail.com');
  });

  it('should throw an error if email is empty', async () => {
    try {
      await email.validate('');
    } catch (error) {
      expect(error.errors).toContain('Please enter your email');
    }
  });

  it.each(['mail.ru', '@mail.ru', 'mail@mail.', 'mail@.ru'])(
    "should throw an error if value ===  %s doesn't match",
    async (mail: string) => {
      try {
        await email.validate(mail);
      } catch (error) {
        expect(error.errors).toContain('Email format is xxx@xx.xx');
      }
    },
  );
});
