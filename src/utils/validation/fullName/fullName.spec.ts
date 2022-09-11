import fullName from './fullName';

describe('full name validation schema', () => {
  const matchesErrorText =
    'Must contains letters and should contians spaces, commas, dots, dashes';

  it('should validate right full name', async () => {
    expect(await fullName.isValid('John Smith')).toBeTruthy();
    expect(await fullName.isValid('John Smith, Jr.')).toBeTruthy();
    expect(await fullName.isValid('John Smith -')).toBeTruthy();
    expect(await fullName.isValid("John d'Smith")).toBeTruthy();
    expect(await fullName.isValid("John d'Smith,,..--")).toBeTruthy();
  });

  it('should trim full name', async () => {
    expect(await fullName.validate(' John Smith ')).toEqual('John Smith');
  });

  it('should throw an error if full name is empty', async () => {
    try {
      await fullName.validate('');
    } catch (error) {
      expect(error.errors).toContain('Please enter your full name');
    }
  });

  it('should throw an error if full name contains wrong chars', async () => {
    try {
      await fullName.validate(
        'John Smith 1234567890!@#$%^&*()=+_{}[]:;"<>?/\\',
      );
    } catch (error) {
      expect(error.errors).toContain(matchesErrorText);
    }
  });

  it('should throw an error if full name contains only available special characters', async () => {
    try {
      await fullName.validate(' ,.-');
    } catch (error) {
      expect(error.errors).toContain(matchesErrorText);
    }
  });

  it('should throw an error is length of full name is greate than max', async () => {
    try {
      await fullName.validate('John Smith'.repeat(26));
    } catch (error) {
      expect(error.errors).toContain(
        'Maximum length of full name is 255 characters',
      );
    }
  });
});
