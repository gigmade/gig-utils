# gig-utils

Purpose: more and project-specific configuration, by using bebbi-scripts functions and adding utilities on top.

## Contents

### Babel

To use, add to `package.json`:

```json
"babel": {
  "presets": [
    "gig-utils/babel"
  ]
},
```

### storybook (tailwind)

To use,
- add babel config above
- add .storybook/main.js:

```js
module.exports = require('gig-utils/sbMain')
```

- add .storybook/preview.js: 

```js
require('./preview.css')

module.exports = require('gig-utils/sbPreview')
```

- add .storybook/preview.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
