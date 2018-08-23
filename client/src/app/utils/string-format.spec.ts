import { formatError } from './string-format';

describe('String format', () => {
  describe('Formattćing error', () => {
    it('should return the string formatted', () => {
      const message = formatError(
        '{field} is a valid field and its properties {property1} and {property2}.',
        'Field',
        {
          property1: 1,
          property2: 2,
        },
      );

      expect(message).toEqual(
        'Field is a valid field and its properties 1 and 2.',
      );
    });
  });
});
