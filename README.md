# fp-ts-numeric-vectors

Immutable numeric vectors for [fp-ts](https://github.com/gcanti/fp-ts).

## Install

```bash
npm install fp-ts @no-day/fp-ts-numeric-vectors
```

## Docs

[API](https://no-day.github.io/fp-ts-numeric-vectors/docs/modules)

## Examples

### Simple

```ts
import { add, sub, div, Vec2n } from "fp-ts-numeric-vectors/vec2n";
import { pipe } from "fp-ts/function";

const result: Vec2n = pipe(
  add([0.456, 4.34], [0.1, 2]),
  _ => sub(_, [1, 3.1]),
  _ => div(_, [2, 2])
);

console.log(result);
```
