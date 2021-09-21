import { base64ToHex, decodeBase64, encodeBase64, hexToBase64 } from './base64';
import { base64, byteArray, hex } from './test';

test('Encode Base64', () => {
  expect(encodeBase64(byteArray)).toBe(base64);
});

test('Decode Base64', () => {
  expect(decodeBase64(base64)).toStrictEqual(byteArray);
});

test('HEX to Base64', () => {
  expect(hexToBase64(hex)).toBe(base64);
});

test('Base64 to HEX', () => {
  expect(base64ToHex(base64)).toBe(hex);
});
