import { getTheme } from './getTheme';

/**
 * Get the default theme from a valid options object.
 * @param {Object} opts The options.
 * @return {Object} The default theme.
 */
export const getDefaultTheme = opts =>
    getTheme({ opts, name: opts.defaultTheme });
