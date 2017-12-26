import { makeThemeProperties } from './makeThemeProperties';

/**
 * Generates the CSS for the root element.
 * @param {object} theme The theme object to draw default properties from.
 * @return {string} Generated CSS.
 */
export const makeRoot = theme => `:root {
  ${makeThemeProperties(theme)}
}
`;
