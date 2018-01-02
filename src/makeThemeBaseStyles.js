export const makeThemeBaseStyles = themes =>
    `.${themes.map(theme => theme.name).join(', .')} {
  background-color: var(--background-color);
  color: var(--color);
  border-color: var(--border-color);
}
` +
    `.${themes.map(theme => `${theme.name}::hover`).join(', .')} {
  background-color: var(--background-hover-color);
}
`;
