import { getTheme } from './getTheme';

/**
 * Gets the theme a specified theme inherits from.
 * @param {object} opts The plugin options.
 * @param {object} theme A theme object.
 * @return {object} The inherited theme object or an empty object if not found.
 */
export const getThemeToInherit = ({ opts, theme }) =>
    theme.inherits ? getTheme({ opts, name: theme.inherits }) : {};
