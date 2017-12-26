import postcss from 'postcss';
import defaultOpts from '../optsDefaults';
import { validateOpts } from './validateOpts';
import { makeRoot } from './makeRoot';
import { makeDefaultStyles } from './makeDefaultStyles';
import { makeThemeBaseStyles } from './makeThemeBaseStyles';
import { getDefaultTheme } from './utils/getDefaultTheme';
import { addMissingProps } from './utils/addMissingProps';
import { makeThemes } from './makeThemes';

const buildCSS = pluginOpts =>
    new Promise(async (resolve, reject) => {
        try {
            const opts = await validateOpts(pluginOpts);
            const defaultTheme = addMissingProps({
                theme: getDefaultTheme(opts),
                opts,
            });

            resolve(`
${makeRoot(defaultTheme)}
${makeDefaultStyles(defaultTheme)}
${makeThemeBaseStyles(opts.themes)}
${makeThemes({ opts, themes: opts.themes })}
`);
        } catch (err) {
            reject(err);
        }
    });

const customPropsThemes = (opts = {}) => {
    return (root, result) =>
        new Promise((resolve, reject) => {
            if (root.source.input.css.indexOf('@custom-props-themes') === -1) {
                result.warn('@custom-props-themes at rule not found');
                resolve();
                return;
            }

            root.walkAtRules('custom-props-themes', async rule => {
                try {
                    const css = await buildCSS(
                        opts.length ? opts : defaultOpts,
                    );
                    rule.before(css);
                    rule.remove();
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        });
};

module.exports = postcss.plugin('custom-props-themes', customPropsThemes);
