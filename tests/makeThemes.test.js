import { makeThemes } from '../src/makeThemes';
import defaultOpts from '../optsDefaults';

test('Themes are generated correctly.', () => {
    expect(makeThemes({ opts: defaultOpts, themes: defaultOpts.themes }))
        .toBe(`.light {
  --background-color: white;
  --background-hover-color: white;
  --color: black;
  --link-color: blue;
  --link-hover-color: purple;
  --heading-color: black;
  --heading-link-color: blue;
  --heading-link-hover-color: purple;
  --border-color: white;
}

.dark {
  --background-color: black;
  --background-hover-color: black;
  --color: white;
  --link-color: blue;
  --link-hover-color: purple;
  --heading-color: white;
  --heading-link-color: blue;
  --heading-link-hover-color: purple;
  --border-color: white;
}

.gray {
  --background-color: gray;
  --background-hover-color: gray;
  --color: black;
  --link-color: blue;
  --link-hover-color: purple;
  --heading-color: black;
  --heading-link-color: blue;
  --heading-link-hover-color: purple;
  --border-color: white;
}
`);
});
