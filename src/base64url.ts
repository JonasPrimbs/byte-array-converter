import { base64ToHex, decodeBase64, encodeBase64, hexToBase64 } from './base64';

/**
 * Encodes a Uint8Array to Base64url encoded Uint8Array string.
 * @param byteArray Uint8Array to encode.
 * @returns Base64url encoded Uint8Array string.
 */
export function encodeBase64url(byteArray: Uint8Array): string {
  const base64 = encodeBase64(byteArray);
  return base64ToBase64url(base64);
}

/**
 * Encodes a Uint8Array to Base64url encoded Uint8Array string.
 * @param base64url Base64url encoded Uint8Array string to decode.
 * @returns Decoded Uint8Array.
 */
export function decodeBase64url(base64url: string): Uint8Array {
  const base64 = base64urlToBase64(base64url);
  return decodeBase64(base64);
}

/**
 * Converts a Base64 encoded Uint8Array string to a Base64url encoded Uint8Array string.
 * @param base64 Base64 encoded Uint8Array string to convert.
 * @returns Base64url encoded Uint8Array string.
 */
export function base64ToBase64url(base64: string): string {
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

/**
 * Converts a Base64url encoded Uint8Array string to a Base64 encoded Uint8Array string.
 * @param base64url Base64url encoded Uint8Array string to convert.
 * @returns Base64 encoded Uint8Array string.
 */
export function base64urlToBase64(base64url: string): string {
  return base64url.replace(/-/g, '+').replace(/_/g, '/');
}

/**
 * Converts a HEX encoded Uint8Array string to a Base64url encoded Uint8Array string.
 * @param hex HEX encoded Uint8Array string to convert.
 * @param separator Separator between HEX encoded bytes.
 * @returns Base64url encoded Uint8Array string.
 */
export function hexToBase64url(hex: string, separator = ':'): string {
  const base64 = hexToBase64(hex, separator);
  return base64ToBase64url(base64);
}

/**
 * Converts a Base64url encoded Uint8Array string to a HEX encoded Uint8Array string.
 * @param base64url Base64url encoded Uint8Array string to convert.
 * @param separator Separator between HEX encoded bytes.
 * @returns HEX encoded Uint8Array string.
 */
export function base64urlToHex(base64url: string, separator = ':'): string {
  const base64 = base64urlToBase64(base64url);
  return base64ToHex(base64, separator);
}
