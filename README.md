# CCardLib

CCardLib is a library for handling character card format, used in roleplay.

## Installation

```
npm install @risuai/ccardlib
yarn add @risuai/ccardlib
pnpm add @risuai/ccardlib
```

## API

### `CCardLib`

#### `CCardLib.check(data) -> 'v1'|'v2'|'v3'|'unknown'`

Check the version of the character card.
if the data is not a character card, it will return `'unknown'`.

- `data` - The data to check.

example:
```typescript
import { CCardLib } from '@risuai/ccardlib'

const data = {
    // Character card v2 data
}

console.log(CCardLib.check(data)) // 'v2'
```

#### `CCardLib.convert(data, arg) -> Object`

Convert the character card to the specified version.

- `data` - The data to convert.
- `arg`
    - `to` - The version to convert to. must be `'v1'`, `'v2'`, or `'v3'`.
    - `from` - The version to convert from. must be `'v1'`, `'v2'`, or `'v3'`. (optional)

example:

```typescript

import { CCardLib } from '@risuai/ccardlib'

const data = {
    // Character card v2 data
}

console.log(CCardLib.convert(data, { to: 'v3' }))
```