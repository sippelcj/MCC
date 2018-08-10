import helpers from './helpers';

describe('helpers', () => {
    test('should render the number two', () => {
      const result = helpers.getDollarPerMS(1000000);
      // 1,000,000 salary would be
      // 480.769230769230769 per hour
      // or 0.133547008547009 per second
      // or 0.0133547008547009 every 1/10 of second
      // const expected =
      expect(result).toEqual(.10);
    });
  });
