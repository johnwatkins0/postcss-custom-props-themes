import { makeThemeProperties } from './makeThemeProperties';
import { addMissingProps } from './utils/addMissingProps';

export const makeThemes = ({ opts, themes }) =>
    themes
        .map(theme => addMissingProps({ opts, theme }))
        .map(
            theme => `.${theme.name} {
  ${makeThemeProperties(theme)}
}
`,
        )
        .join('\n');
