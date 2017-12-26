import { makeRoot } from '../src/makeRoot';
import defaultOpts from '../optsDefaults';

test('The root element is correctly generated.', () => {
    expect(
        makeRoot(defaultOpts.themes.filter(theme => theme.name === 'light')[0]),
    ).toBe(`:root {
  --background-color: white;
  --color: black;
  --link-color: blue;
  --link-hover-color: purple;
  --heading-color: black;
  --heading-link-color: blue;
  --heading-link-hover-color: purple;
}
`);
});
