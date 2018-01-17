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
                opts
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

const customPropsThemes = (opts = {}) => root =>
    new Promise((resolve, reject) => {
        console.log('hihihi');
        const atRuleCount =
            root.source.input.css.split('@custom-props-themes').length - 1;

        if (atRuleCount === 0) {
            result.warn('@custom-props-themes at rule not found');
            reject('@custom-props-themes at rule not found');
            return;
        }

        let steps = 0;
        root.walkAtRules('custom-props-themes', async rule => {
            try {
                const css = await buildCSS(
                    Object.keys(opts).length ? opts : defaultOpts
                );
                rule.before(css);
                rule.remove();
                steps += 1;
            } catch (err) {
                steps += 1;
                result.warn(err);
            }
        });

        const completionInterval = setInterval(() => {
            if (steps === atRuleCount) {
                clearInterval(completionInterval);
                resolve();
            }
        }, 1000);
    });

module.exports = postcss.plugin('custom-props-themes', customPropsThemes);
