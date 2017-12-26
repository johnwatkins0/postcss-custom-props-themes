/**
 * Generates custom properties definitions from a theme.
 * @param {object} theme A theme object.
 * @return {string} The generated lines of CSS.
 */
export const makeThemeProperties = theme =>
    Object.keys(theme)
        .map(
            key =>
                ['name', 'inherits'].indexOf(key) > -1
                    ? ''
                    : `--${key}: ${theme[key]};`,
        )
        .filter(line => line.length)
        .join('\n  ');
