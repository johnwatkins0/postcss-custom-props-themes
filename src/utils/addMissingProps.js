import { getDefaultTheme } from './getDefaultTheme';
import { getThemeToInherit } from './getThemeToInherit';
import defaultOpts from '../../optsDefaults';

/**
 * Add inherited properties to a theme object.
 * @param {object} opts The plugin options.
 * @param {object} theme The theme.
 * @return {object} The theme with missing properties added.
 */
export const addMissingProps = ({ opts, theme }) =>
    Object.assign(
        {},
        getDefaultTheme(defaultOpts),
        getDefaultTheme(opts),
        getThemeToInherit({ opts, theme }),
        theme,
    );
