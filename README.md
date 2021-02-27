# ts-numeric-vectors

Immutable numeric vectors.

## Install

```bash
npm install git+https://github.com/no-day/ts-numeric-vectors
```

## Docs

[API](https://no-day.github.io/ts-numeric-vectors/modules)

## Examples

### Simple

```ts
import { add, sub, div, Vec2n } from "ts-numeric-vectors/vec2n";
import { pipe } from "fp-ts/function";

const result: Vec2n = pipe(
  add([0.456, 4.34], [0.1, 2]),
  _ => sub(_, [1, 3.1]),
  _ => div(_, [2, 2])
);

console.log(result);
```
