import defaultOpts from '../../optsDefaults';
import { getThemeToInherit } from '../../src/utils/getThemeToInherit';
import { getTheme } from '../../src/utils/getTheme';

test('Non-inheriting theme returns an empty object.', () => {
    expect(
        getThemeToInherit({
            opts: defaultOpts,
            theme: getTheme({ opts: defaultOpts, name: 'light' }),
        }),
    ).toMatchObject({});
});
