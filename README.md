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
This can also be used to check if the data is a valid character card.

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

### `CCardLib.decorator.parse(data, hook) -> String`

Parse the lorebook content which contains decorators. decorators will call the hook function.
fallback decorators `@@@` would only be called when the above decorators is ignored.

- `data` - The lorebook content. must be a string.
- `hook(name, args)` - The hook function. it will be called when the decorator is found. if the hook function returns `false`, the decorator will be treated as a ignored decorator, and the fallback decorator will be called.
  - `name` - The name of the decorator without the `@` symbol. it will be a string.
  - `args` - The arguments of the decorator. it will be an array of strings.

example:

```typescript

import { CCardLib } from '@risuai/ccardlib'


const data = `
@@decorator arg1,arg2
@@@fallback arg
@@decorator2
@@@fallback2
`

const result = CCardLib.decorator.parse(data, (name, args) => {
  console.log(`${name} is called with args: ${args.join(', ')}`)
  if (name === 'decorator') {
    console.log(`decorator(${args.join(', ')})`) //decorator's effect
    return
  }
  if (name === 'fallback' || name === 'fallback2') {
    return
  }
  return false // return false to call fallback decorator
})

console.log(result)
// decorator is called with args: arg1, arg2
// decorator(arg1, arg2)
// decorator2 is called with args:
// fallback2 is called with args:
```