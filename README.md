# Byte Array Converter

A tiny JavaScript Library for converting Uint8Arrays to various string representations and back.

## Supported Encodings

- HEX ([RFC 4194](https://datatracker.ietf.org/doc/html/rfc4194))
- Base64 ([RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648))
- Base64url ([RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648))

## Supported Platforms

- Browser: ES2015+/ES6+

## Installation

### From NPM Registry

```bash
npm install @jonasprimbs/byte-array-converter
```

### From Github Registry

```bash
npm install @jonasprimbs/byte-array-converter --registry=https://npm.pkg.github.com
```

## Usage

Can be used in JavaScript and TypeScript.

### Uint8Array - HEX

```typescript
import { decodeHex, encodeHex } from '@jonasprimbs/byte-array-converter';

encodeHex(new Uint8Array([0, 8, 64, 255])); // "00:08:40:FF"
encodeHex(new Uint8Array([0, 8, 64, 255]), ' '); // "00 08 40 FF"

decodeHex('00:08:40:FF'); // Uint8Array(4) [ 0, 8, 64, 255 ]
decodeHex('00 08 40 FF', ' '); // Uint8Array(4) [ 0, 8, 64, 255 ]
```

### Uint8Array - Base64

```typescript
import { decodeBase64, encodeBase64 } from '@jonasprimbs/byte-array-converter';

encodeBase64(new Uint8Array([0, 8, 64, 255])); // "AAhA/w=="

decodeBase64('AAhA/w=='); // Uint8Array(4) [ 0, 8, 64, 255 ]
```

### Uint8Array - Base64url

```typescript
import { decodeBase64url, encodeBase64url } from '@jonasprimbs/byte-array-converter';

encodeBase64url(new Uint8Array([0, 8, 64, 255])); // "AAhA_w"

decodeBase64url('AAhA_w'); // Uint8Array(4) [ 0, 8, 64, 255 ]
```

### HEX - Base64

```typescript
import { base64ToHex, hexToBase64 } from '@jonasprimbs/byte-array-converter';

hexToBase64('00:08:40:FF'); // "AAhA/w=="
hexToBase64('00 08 40 FF', ' '); // "AAhA/w=="

base64ToHex('AAhA/w=='); // "00:08:40:FF"
base64ToHex('AAhA/w==', ' '); // "00 08 40 FF"
```

### HEX - Base64url

```typescript
import { base64urlToHex, hexToBase64url } from '@jonasprimbs/byte-array-converter';

hexToBase64url('00:08:40:FF'); // "AAhA_w"
hexToBase64url('00 08 40 FF', ' '); // "AAhA_w"

base64urlToHex('AAhA_w'); // "00:08:40:FF"
base64urlToHex('AAhA_w', ' '); // "00 08 40 FF"
```

### Base64 - Base64url

```typescript
import { base64ToBase64url, base64urlToBase64 } from '@jonasprimbs/byte-array-converter';

base64ToBase64url('AAhA/w=='); // "AAhA_w"

base64urlToBase64('AAhA_w'); // "AAhA/w=="
```
