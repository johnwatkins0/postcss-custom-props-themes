import defaultOpts from '../../optsDefaults';
import { getDefaultTheme } from '../../src/utils/getDefaultTheme';

test('Default theme is returned', () => {
    expect(getDefaultTheme(defaultOpts)).toMatchObject({
        name: 'light',
        'background-color': 'white',
        color: 'black',
        'link-color': 'blue',
        'link-hover-color': 'purple',
        'heading-color': 'black',
        'heading-link-color': 'blue',
        'heading-link-hover-color': 'purple',
    });
});
