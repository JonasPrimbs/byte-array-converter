import { decodeHex, encodeHex } from './hex';
import { byteArray, hex } from './test';

test('Encode HEX', () => {
  expect(encodeHex(byteArray)).toBe(hex);
});

test('Decode HEX', () => {
  expect(decodeHex(hex)).toStrictEqual(byteArray);
});
