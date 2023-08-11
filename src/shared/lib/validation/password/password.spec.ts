import password from './password';

describe('password validation schema', () => {
  const matchesErrorText =
    'Must contain 8 characters, One uppercase, One lowercase, One number and One special case character';

  it('should validate right password', async () => {
    expect(await password.isValid('Qwerty123!')).toBeTruthy();
  });

  it('should trim password', async () => {
    expect(await password.validate(' Qwerty123! ')).toEqual('Qwerty123!');
  });

  it('should throw an error if password is empty', async () => {
    try {
      await password.validate('');
    } catch (error) {
      expect(error.errors).toContain('Please enter your password');
    }
  });

  it('should throw an error if password length less than 8 chars', async () => {
    try {
      await password.validate('qwe');
    } catch (error) {
      expect(error.errors).toContain(matchesErrorText);
    }
  });

  it('should throw an error if password haven`t one uppercase letter', async () => {
    try {
      await password.validate('qwerty123!');
    } catch (error) {
      expect(error.errors).toContain(matchesErrorText);
    }
  });

  it('should throw an error if password haven`t one lowercase letter', async () => {
    try {
      await password.validate('QWERTY123!');
    } catch (error) {
      expect(error.errors).toContain(matchesErrorText);
    }
  });

  it('should throw an error if password haven`t one number', async () => {
    try {
      await password.validate('QWERTY!!!');
    } catch (error) {
      expect(error.errors).toContain(matchesErrorText);
    }
  });

  it.each([['!'], ['@'], ['#'], ['$'], ['%'], ['^'], ['&'], ['*']])(
    'should throw an error if password haven`t one spetial case char. Char is %s',
    async (char) => {
      try {
        await password.validate(`QWERTY123${char}`);
      } catch (error) {
        expect(error.errors).toContain(matchesErrorText);
      }
    },
  );
});
