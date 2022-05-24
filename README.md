# Warning:
### This repository is still under development and should not be used yet.
 
--------


# Admin component library

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run storybook
```

### Compiles and minifies for production
```
npm run build-storybook
```

### Run your interaction tests
```
npm run test-storybook
```

### Lints and fixes files
```
npm run lint
```

## Writing interaction tests

All interaction tests are written in `component-name.interactive.stories.js` files. The title needs to be prefixed with `Interaction Tests/`. These interaction tests are hidden in the final build but are visible in the Storybook development watcher.

Example:

```js
export default {
  ...defaultButtonStory,
  title: 'Interaction Tests/base/sw-button',
  component: SwButton,
};
```

### canvasElement
The canvasElement, which is described in the official Storybook documentation, is not working. To access the component you need to write the following:

```js
TestButtonClick.play = async () => {
  // Get the cavnas
  const canvas = within(document.getElementById('root'));

  // Write here your interaction test
}
```

## Writing visual tests

Stories for visual tests need to start with `VisualTest`.

Example:

```js
export const VisualTestPrimaryVariant = Default.bind();
VisualTestPrimaryVariant.storyName = 'Render the primary variant';
...
```

The screenshot will  be generated at the end of the Play function. If no Play function is defined then it will be created immediatly.

For reduced flakyness all animations are automatically disabled from Playwright.