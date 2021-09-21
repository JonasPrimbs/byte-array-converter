# Byte Converter

A tiny JavaScript Library for converting Uint8Arrays to various string representations and back.

## Supported Encodings

- HEX (hexadecimal)
- Base64 (RFC 3548, 4648)
- Base64url (RFC 4648)

## Supported Platforms

- Browser: ES2015+/ES6+

## Installation

```bash
npm install byte-converter
```

## Usage

### Uint8Array - HEX

```typescript
import { decodeHex, encodeHex } from 'byte-converter';

encodeHex(new Uint8Array([0, 8, 64, 255])); // "00:08:40:ff"
encodeHex(new Uint8Array([0, 8, 64, 255]), ' '); // "00 08 40 ff"

decodeHex('00:08:40:ff'); // Uint8Array(4) [ 0, 8, 64, 255 ]
decodeHex('00 08 40 ff', ' '); // Uint8Array(4) [ 0, 8, 64, 255 ]
```

### Uint8Array - Base64

```typescript
import { decodeBase64, encodeBase64 } from 'byte-converter';

encodeBase64(new Uint8Array([0, 8, 64, 255])); // "AAhA/w=="

decodeBase64('AAhA/w=='); // Uint8Array(4) [ 0, 8, 64, 255 ]
```

### Uint8Array - Base64url

```typescript
import { decodeBase64url, encodeBase64url } from 'byte-converter';

encodeBase64url(new Uint8Array([0, 8, 64, 255])); // "AAhA_w"

decodeBase64url('AAhA_w'); // Uint8Array(4) [ 0, 8, 64, 255 ]
```

### HEX - Base64

```typescript
import { base64ToHex, hexToBase64 } from 'byte-converter';

hexToBase64('00:08:40:ff'); // "AAhA/w=="
hexToBase64('00 08 40 ff', ' '); // "AAhA/w=="

base64ToHex('AAhA/w=='); // "00:08:40:ff"
base64ToHex('AAhA/w==', ' '); // "00 08 40 ff"
```

### HEX - Base64url

```typescript
import { base64urlToHex, hexToBase64url } from 'byte-converter';

hexToBase64url('00:08:40:ff'); // "AAhA_w"
hexToBase64url('00 08 40 ff', ' '); // "AAhA_w"

base64urlToHex('AAhA_w'); // "00:08:40:ff"
base64urlToHex('AAhA_w', ' '); // "00 08 40 ff"
```

### Base64 - Base64url

```typescript
import { base64ToBase64url, base64urlToBase64 } from 'byte-converter';

base64ToBase64url('AAhA/w=='); // "AAhA_w"

base64urlToBase64('AAhA_w'); // "AAhA/w=="
```
