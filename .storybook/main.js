module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "refs": {
       "design-system": {
         "title": 'My design system',
         //👇 The url provided by Chromatic when it was deployed
         "url": 'https://chris-heyer-planetly.github.io/npm-package-example/',
       },
     },
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}