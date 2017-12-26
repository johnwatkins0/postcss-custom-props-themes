/**
 * Gets a theme from the options object by name.
 * @param {object} opts The plugin options.
 * @param {string} name The theme name.
 * @return {object} Theme or an empty object if not found.
 */
export const getTheme = ({ opts, name }) =>
    opts.themes.filter(theme => theme.name === name)[0] || {};
