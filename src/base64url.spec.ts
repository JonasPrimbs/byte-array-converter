import {
  base64ToBase64url,
  base64urlToBase64,
  base64urlToHex,
  decodeBase64url,
  encodeBase64url,
  hexToBase64url
} from './base64url';
import { base64, base64url, byteArray, hex } from './test';

test('Encode Base64url', () => {
  expect(encodeBase64url(byteArray)).toBe(base64url);
});

test('Decode Base64url', () => {
  expect(decodeBase64url(base64url)).toStrictEqual(byteArray);
});

test('Base64 to Base64url', () => {
  expect(base64ToBase64url(base64)).toBe(base64url);
});

test('Base64url to Base64', () => {
  expect(base64urlToBase64(base64url)).toBe(base64);
});

test('HEX to Base64url', () => {
  expect(hexToBase64url(hex)).toBe(base64url);
});

test('Base64url to HEX', () => {
  expect(base64urlToHex(base64url)).toBe(hex);
});
