# postcss-custom-props-themes [![Build Status](https://travis-ci.org/johnwatkins0/postcss-custom-props-themes.svg?branch=master)](https://travis-ci.org/johnwatkins0/postcss-custom-props-themes)

A [PostCSS](https://github.com/postcss/postcss) plugin for generating theming classes based on CSS custom properties.

## About

This plugin generates user-defined CSS classes to set an element's background color and the colors of enclosed elements, including text, links, and headings.

This plugin uses CSS custom properties. While this approach saves many lines of CSS, it is not recommended for any project needing to support older browsers.

## Install

```
yarn add --dev postcss-custom-props-themes
```

OR

```
npm install --save-dev postcss-custom-props-themes
```

## Usage

Place the required @-rule in your CSS where you want the theming code to appear.

```CSS
@custom-props-themes;
```

Pass configuration options to the plugin via your postcss.config.js file:

```Javascript
module.exports = {
  plugins: {
    'postcss-custom-props-themes': {
      // Your settings.
    },
  },
};
```

### The settings schema

The main settings object has two fields:

```Javascript
{
  defaultTheme: 'string' // Required. The name of the theme to use for fallbacks.
  themes: [ // Required. An array of theme objects.
    {
    // See below.
    }
  ]
}
```

Each object in the themes array can take several settings:

```Javascript
{
  name: 'string', // Required. The name of the theme -- e.g., 'light', 'dark', 'primary'.
  inherits: 'string', // Another theme in this array to inherit from. Unset values in this theme object will be drawn from the theme it inherits from. By default, themes inherit from the default theme.
  color: 'string' // The rest of the settings are CSS colors.
  'link-color': 'string',
  'link-hover-color': 'string',
  'heading-color': 'string',
  'heading-link-color': 'string',
  'heading-link-hover-color': 'string'
}
```

#### Defaults

If an empty object is passed to the plugin, the following rudimentary defaults are used. If any settings are passed, the defaults are ignored completely.

```Javascript
{
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
}
```

## Applying theme styles

Say you set the following theme:

```Javascript
{
    name: 'example-theme',
    'background-color': 'white',
    color: 'black',
    'link-color': 'blue',
    'link-hover-color': 'purple',
    'heading-color': 'red',
    'heading-link-color': 'orange',
    'heading-link-hover-color': 'yellow',
}
```

The theme can be used in your markup like so:

```HTML
<section class="example-theme"><!-- Will have a white background. -->
  <h1>A Heading</h1><!-- Red. -->
  <div>Some text</div><!-- Black. -->
  <h2><a href="#">Another heading</a></h2><!-- Orange (yellow on hover). -->
  <a href="#">A link</a><!-- Blue (purple on hover). -->
</section>
```
