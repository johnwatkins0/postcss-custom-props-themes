/* eslint quote-props: 0 */
module.exports = {
    defaultTheme: 'light',
    themes: [
        {
            name: 'light',
            'background-color': 'white',
            color: 'black',
            'link-color': 'blue',
            'link-hover-color': 'purple',
            'heading-color': 'black',
            'heading-link-color': 'blue',
            'heading-link-hover-color': 'purple',
        },
        {
            name: 'dark',
            inherits: 'light',
            'background-color': 'black',
            color: 'white',
            'heading-color': 'white',
        },
        {
            name: 'gray',
            inherits: 'light',
            'background-color': 'gray',
        },
    ],
};
