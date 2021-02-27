import { add, sub, div, Vec2n } from "ts-numeric-vectorss/vec2n";
import { pipe } from "fp-ts/function";

const result: Vec2n = pipe(
  add([0.456, 4.34], [0.1, 2]),
  _ => sub(_, [1, 3.1]),
  _ => div(_, [2, 2])
);

console.log(result);
