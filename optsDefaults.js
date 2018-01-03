/* eslint quote-props: 0 */
module.exports = {
    defaultTheme: 'light',
    themes: [
        {
            name: 'light',
            'background-color': 'white',
            'background-hover-color': 'white',
            color: 'black',
            'link-color': 'blue',
            'link-hover-color': 'purple',
            'heading-color': 'black',
            'heading-link-color': 'blue',
            'heading-link-hover-color': 'purple',
            'border-color': 'white',
        },
        {
            name: 'dark',
            inherits: 'light',
            'background-color': 'black',
            'background-hover-color': 'black',
            color: 'white',
            'heading-color': 'white',
        },
        {
            name: 'gray',
            inherits: 'light',
            'background-color': 'gray',
            'background-hover-color': 'gray',
        },
    ],
};
