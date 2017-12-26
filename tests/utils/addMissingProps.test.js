import defaultOpts from '../../optsDefaults';
import { addMissingProps } from '../../src/utils/addMissingProps';

test('Missing props are filled in correctly.', () => {
    const testTheme = defaultOpts.themes.filter(
        theme => theme.name === 'gray',
    )[0];

    expect(
        addMissingProps({ opts: defaultOpts, theme: testTheme }),
    ).toMatchObject({
        name: 'gray',
        'background-color': 'gray',
        color: 'black',
        'link-color': 'blue',
        'link-hover-color': 'purple',
        'heading-color': 'black',
        'heading-link-color': 'blue',
        'heading-link-hover-color': 'purple',
    });
});
