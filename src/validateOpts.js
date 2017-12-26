import fs from 'fs';
import path from 'path';
import Ajv from 'ajv';

/**
 * Validate options passed to the plugin.
 * @param {Object} pluginOpts The passed-in options.
 * @param {string} schemaFile A path to the file containing the schema.
 * @return {Promise} A promise resolving with validated options or an error on rejection.
 */
export const validateOpts = (
    opts,
    schemaFile = path.resolve(__dirname, '../optsSchema.json'),
) =>
    new Promise((resolve, reject) => {
        fs.readFile(schemaFile, 'utf-8', (err, schemaBuffer) => {
            if (err) {
                reject(err);
                return;
            }

            const ajv = new Ajv();
            const valid = ajv.validate(JSON.parse(schemaBuffer), opts);

            if (!valid) {
                reject(ajv.errorsText());
                return;
            }

            resolve(opts);
        });
    });
