import { isValid } from '..';

describe('isValid', () => {
  describe('should return true for Amazonas', () => {
    test('when IE for Amazonas is correct', () => {
      expect(isValid('AM', '48.063.523-4')).toBe(true);
      expect(isValid('AM', '036029572')).toBe(true);
      expect(isValid('AM', '000000019')).toBe(true);
      expect(isValid('AM', '046893830')).toBe(true);
    });
  });
  describe('should return false for Amazonas', () => {
    test('when IE for Amazonas is incorrect', () => {
      // verifier digit false
      expect(isValid('AM', '036029573')).toBe(false);
      // more then 9 digits
      expect(isValid('AM', '0036029572')).toBe(false);
    });
  });
});
