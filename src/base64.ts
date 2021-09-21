import { decodeHex, encodeHex } from './hex';

/**
 * Encodes a Uint8Array to Base64 encoded string.
 * @param byteArray Uint8Array to encode.
 * @returns Base64 encoded Uint8Array string.
 */
export function encodeBase64(byteArray: Uint8Array): string {
  return window.btoa(
    Array.from(byteArray)
      .map((b) => String.fromCharCode(b))
      .join('')
  );
}

/**
 * Decodes a base64 encoded Uint8Array string to Uint8Array.
 * @param base64 Base64 encoded Uint8Array string to decode.
 * @returns Decoded Uint8Array.
 */
export function decodeBase64(base64: string): Uint8Array {
  return new Uint8Array(
    window
      .atob(base64)
      .split('')
      .map((b) => b.charCodeAt(0))
  );
}

/**
 * Converts a HEX encoded Uint8Array string to a Base64 encoded Uint8Array string.
 * @param hex HEX encoded Uint8Array string to convert.
 * @returns Base64 encoded Uint8Array string.
 */
export function hexToBase64(hex: string): string {
  const byteArray = decodeHex(hex);
  return encodeBase64(byteArray);
}

/**
 * Converts a Base64 encoded Uint8Array string to a HEX encoded Uint8Array string.
 * @param base64 Base64 encoded Uint8Array string to convert.
 * @returns HEX encoded Uint8Array string.
 */
export function base64ToHex(base64: string): string {
  const byteArray = decodeBase64(base64);
  return encodeHex(byteArray);
}
