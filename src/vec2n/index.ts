/**
 * @since 0.1.0
 */

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category model
 * @since 0.1.0
 */

export type Vec2n = [number, number];

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 * @since 0.1.0
 */
export const vec2n = (x1: number, x2: number): Vec2n => [x1, x2];

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @category combinators
 * @since 0.1.0
 */
export const add = (v1: Vec2n, v2: Vec2n): Vec2n => [
  v1[0] + v2[0],
  v2[1] + v2[1],
];

/**
 * @category combinators
 * @since 0.1.0
 */
export const sub = (v1: Vec2n, v2: Vec2n): Vec2n => [
  v1[0] - v2[0],
  v2[1] - v2[1],
];

/**
 * @category combinators
 * @since 0.1.0
 */
export const mul = (v1: Vec2n, v2: Vec2n): Vec2n => [
  v1[0] * v2[0],
  v2[1] * v2[1],
];

/**
 * @category combinators
 * @since 0.1.0
 */
export const div = (v1: Vec2n, v2: Vec2n): Vec2n => [
  v1[0] / v2[0],
  v2[1] / v2[1],
];
