import { decodeHex, encodeHex } from './hex';

/**
 * Encodes a Uint8Array to Base64 encoded string.
 * @param byteArray Uint8Array to encode.
 * @returns Base64 encoded Uint8Array string.
 */
export function encodeBase64(byteArray: Uint8Array): string {
  if (typeof window !== 'undefined') {
    return window.btoa(String.fromCharCode(...Array.from(byteArray)));
  } else {
    return Buffer.from(byteArray).toString('base64');
  }
}

/**
 * Decodes a base64 encoded Uint8Array string to Uint8Array.
 * @param base64 Base64 encoded Uint8Array string to decode.
 * @returns Decoded Uint8Array.
 */
export function decodeBase64(base64: string): Uint8Array {
  if (typeof window !== 'undefined') {
    const str = window.atob(base64);
    return new Uint8Array(str.split('').map((b) => b.charCodeAt(0)));
  } else {
    return Buffer.from(base64, 'base64');
  }
}

/**
 * Converts a HEX encoded Uint8Array string to a Base64 encoded Uint8Array string.
 * @param hex HEX encoded Uint8Array string to convert.
 * @param separator Separator between HEX encoded bytes.
 * @returns Base64 encoded Uint8Array string.
 */
export function hexToBase64(hex: string, separator = ':'): string {
  const byteArray = decodeHex(hex, separator);
  return encodeBase64(byteArray);
}

/**
 * Converts a Base64 encoded Uint8Array string to a HEX encoded Uint8Array string.
 * @param base64 Base64 encoded Uint8Array string to convert.
 * @param separator Separator between HEX encoded bytes.
 * @returns HEX encoded Uint8Array string.
 */
export function base64ToHex(base64: string, separator = ':'): string {
  const byteArray = decodeBase64(base64);
  return encodeHex(byteArray, separator);
}
