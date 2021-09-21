/**
 * Encodes a Uint8Array to HEX encoded Uint8Array string.
 * @param byteArray Uint8Array to encode.
 * @param separator Separator between encoded bytes.
 * @returns HEX encoded Uint8Array string.
 */
export function encodeHex(byteArray: Uint8Array, separator = ':'): string {
  return Array.from(byteArray)
    .map((b) => (b < 16 ? '0' : '') + b.toString(16))
    .join(separator)
    .toUpperCase();
}

/**
 * Decodes a HEX encoded Uint8Array string.
 * @param hexString HEX encoded Uint8Array string to decode.
 * @param separator Separator between encoded bytes.
 * @returns Decoded Uint8Array.
 */
export function decodeHex(hexString: string, separator = ':'): Uint8Array {
  return new Uint8Array(hexString.split(separator).map((b) => parseInt(b, 16)));
}
