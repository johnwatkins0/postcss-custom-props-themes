import defaultOpts from '../../optsDefaults';
import { getTheme } from '../../src/utils/getTheme';

test('Passing a nonexistent theme name returns an empty object.', () => {
    expect(
        getTheme({
            opts: defaultOpts,
            name: 'not-a-theme',
        }),
    ).toMatchObject({});
});
