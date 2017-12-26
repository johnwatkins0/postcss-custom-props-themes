import { makeDefaultStyles } from '../src/makeDefaultStyles';
import defaultOpts from '../optsDefaults';
import { getTheme } from '../src/utils/getTheme';

test('Default styles are generated correctly.', () => {
    expect(makeDefaultStyles(getTheme({ opts: defaultOpts, name: 'light' })))
        .toBe(`body {
  background-color: white;
  background-color: var(--background-color);
  color: black;
  color: var(--color);
}

a {
  color: blue;
  color: var(--link-color);
}

a:hover {
  color: purple;
  color: var(--link-hover-color);
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  color: black;
  color: var(--heading-color);
}

.h1 a, .h2 a, .h3 a, .h4 a, .h5 a, .h6 a, h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
  color: blue;
  color: var(--heading-link-color);
}

.h1 a:hover, .h2 a:hover, .h3 a:hover, .h4 a:hover, .h5 a:hover, .h6 a:hover, h1 a:hover, h2 a:hover, h3 a:hover, h4 a:hover, h5 a:hover, h6 a:hover {
  color: purple;
  color: var(--heading-link-hover-color);
}
`);
});
