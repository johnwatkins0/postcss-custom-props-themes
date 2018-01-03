import { makeThemeBaseStyles } from '../src/makeThemeBaseStyles';
import defaultOpts from '../optsDefaults';

test('Theme base styles are generated correctly.', () => {
    expect(makeThemeBaseStyles(defaultOpts.themes)).toBe(`.light, .dark, .gray {
  background-color: var(--background-color);
  color: var(--color);
  border-color: var(--border-color);
}
.light::hover, .dark::hover, .gray::hover {
  background-color: var(--background-hover-color);
}
`);
});
