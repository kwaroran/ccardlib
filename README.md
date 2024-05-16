# CCardLib

CCardLib is a library for handling character card format, used in roleplay. can be used both in the browser and in Node.js. no dependencies.

## Installation

```
npm install @risuai/ccardlib
yarn add @risuai/ccardlib
pnpm install @risuai/ccardlib
```

## API

### `CCardLib.character`

#### `CCardLib.character.check(data) -> 'v1'|'v2'|'v3'|'unknown'`

Check the version of the character card.
if the data is not a character card, it will return `'unknown'`.

- `data` - The data to check.

example:
```typescript
import { CCardLib } from '@risuai/ccardlib'

const data = {
    // Character card v2 data
}

console.log(CCardLib.character.check(data)) // 'v2'
```

#### `CCardLib.character.convert(data, args) -> Object`

Convert the character card to the specified version.
Both forward and backward conversion are possible. however, backward conversion may lose some data.

- `data` - The data to convert.
- `args`
  - `to` - The version to convert to. must be `'v1'`, `'v2'`, or `'v3'`.
  - `from` - The version to convert from. must be `'v1'`, `'v2'`, or `'v3'`. (optional)
  - `options` - The options for the conversion. (optional)
    - `convertRisuFields` - Convert out of spec fields that are specific to RisuAI. (default: `false`)
    - `removeDecorators` - Remove decorators from lorebook if `to` is `'v2'`. This is recommended on v3 spec. (default: `true`)

example:

```typescript

import { CCardLib } from '@risuai/ccardlib'

const data = {
    // Character card v2 data
}

console.log(CCardLib.character.convert(data, { to: 'v3' }))
```

#### `CCardLib.lorebook.convert(data, args) -> Object`

Convert the lorebook to the specified version.
Both forward and backward conversion are possible. however, backward conversion may lose some data.

- `data` - The data to convert.
- `args`
  - `to` - The version to convert to. must be `'v2'`, or `'v3'`.
  - `from` - The version to convert from. must be `'v2'`, or `'v3'`. (optional)
  - `options` - The options for the conversion. (optional)
    - `removeDecorators` - Remove decorators from lorebook if `to` is `'v2'`. This is recommended on v3 spec. (default: `true`)

example:

```typescript

import { CCardLib } from '@risuai/ccardlib'

const data = {
    // Lorebook v2 data
}

console.log(CCardLib.character.convert(data, { to: 'v3' }))
```