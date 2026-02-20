/**
 * Scopes CSS by prefixing .cls-* selectors with #scopeId.
 * Prevents class collisions between SVG components.
 */
export function scopeCss(css: string, scopeId: string): string {
  return css.replace(/\.cls-/g, `#${scopeId} .cls-`);
}
