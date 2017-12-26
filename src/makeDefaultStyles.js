/**
 * Generates default styles.
 * @param {object} theme The default theme object.
 * @return {string} Generated CSS.
 */
export const makeDefaultStyles = theme => `body {
  background-color: ${theme['background-color']};
  background-color: var(--background-color);
  color: ${theme.color};
  color: var(--color);
}

a {
  color: ${theme['link-color']};
  color: var(--link-color);
}

a:hover {
  color: ${theme['link-hover-color']};
  color: var(--link-hover-color);
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  color: ${theme['heading-color']};
  color: var(--heading-color);
}

.h1 a, .h2 a, .h3 a, .h4 a, .h5 a, .h6 a, h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
  color: ${theme['heading-link-color']};
  color: var(--heading-link-color);
}

.h1 a:hover, .h2 a:hover, .h3 a:hover, .h4 a:hover, .h5 a:hover, .h6 a:hover, h1 a:hover, h2 a:hover, h3 a:hover, h4 a:hover, h5 a:hover, h6 a:hover {
  color: ${theme['heading-link-hover-color']};
  color: var(--heading-link-hover-color);
}
`;
