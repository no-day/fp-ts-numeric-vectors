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

export type Vec3n = [number, number, number];

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 * @since 0.1.0
 */
export const vec3n = (x1: number, x2: number, x3: number): Vec3n => [
  x1,
  x2,
  x3,
];

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @category combinators
 * @since 0.1.0
 */
export const add = (v1: Vec3n, v2: Vec3n): Vec3n => [
  v1[0] + v2[0],
  v2[1] + v2[1],
  v2[2] + v2[2],
];

/**
 * @category combinators
 * @since 0.1.0
 */
export const sub = (v1: Vec3n, v2: Vec3n): Vec3n => [
  v1[0] - v2[0],
  v2[1] - v2[1],
  v2[2] - v2[2],
];

/**
 * @category combinators
 * @since 0.1.0
 */
export const mul = (v1: Vec3n, v2: Vec3n): Vec3n => [
  v1[0] * v2[0],
  v2[1] * v2[1],
  v2[2] * v2[2],
];

/**
 * @category combinators
 * @since 0.1.0
 */
export const div = (v1: Vec3n, v2: Vec3n): Vec3n => [
  v1[0] / v2[0],
  v2[1] / v2[1],
  v2[2] / v2[2],
];
