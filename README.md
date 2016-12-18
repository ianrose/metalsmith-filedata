# metalsmith-filedata
Add file, CSS for example, content to global metadata. An example of a use case would be using Sass and having a critical CSS `.scss` output that needs to be in available inline in markup.

## Installation

```
npm install metalsmith-filedata
```

## Usage

```js
var filedata = require('metalsmith-filedata')

Metalsmith(__dirname)
  .use(filedata(options))
  .build()
```

### Options

- pattern: `String|Array<String>`
- key: `String`

### Example

```js
Metalsmith(__dirname)
  .use(filedata({
    pattern: ['styles/*.css', 'scripts/*.js'],
    key: 'contentData'
  }))
  .use(template({ engine: 'handlebars' }))
  .build()
```

The `options.key` or `filedata` object is accessible from Handlebars:

```html
<style>
{{{contentData.[styles/main.css]}}}
</style>
```

The compiled markup:

```html
<style>
  body {
    background-color: white;
  }
</style>
```

## License


[The MIT License (MIT)](https://github.com/ianrose/metalsmith-filedata/blob/master/LICENSE)