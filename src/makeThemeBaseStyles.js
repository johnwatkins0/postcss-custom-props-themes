export const makeThemeBaseStyles = themes => `.${themes
    .map(theme => theme.name)
    .join(', .')} {
  background-color: var(--background-color);
  color: var(--color);
}`;
