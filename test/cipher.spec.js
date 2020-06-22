import cipher from '../src/cipher.js';

describe('cipher', () => {

  test('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    test('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });
    test('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      //completa este test!
        expect(cipher.encode("ABC", 33)).toBe("HIJ");

    });
    test('should return "hijklmnopqrstuvwxyz" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
      //completa este test!
        expect(cipher.encode("abc", 33)).toBe("hij");

    });
    
  });

  describe('cipher.decode', () => {

    test('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    test('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset -33', () => {
      //completa este test!
      expect(cipher.decode("HIJ", -33)).toBe("A()");
    });
    test('should return "abcdefghijklmnopqrstuvwxy" for "hijklmnopqrstuvwxyz" with offset -33', () => {
      //completa este test!
      expect(cipher.decode("a()", -33)).toBe("hij");
    });

  });

});

