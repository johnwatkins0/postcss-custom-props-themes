import { makeThemeBaseStyles } from '../src/makeThemeBaseStyles';
import defaultOpts from '../optsDefaults';

test('Theme base styles are generated correctly.', () => {
    expect(makeThemeBaseStyles(defaultOpts.themes)).toBe(`.light, .dark, .gray {
  background-color: var(--background-color);
  color: var(--color);
}`);
});

