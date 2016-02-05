# The Power Of The Preset

As well as specifying each package individually, giving you full control over what is transformes, you can also use presets. 

Presets essentially group together a bunch of plugins, so for example the es2015 preset contains everything you need in order to tranform any es2015 features.

## Adding a preset

To add a preset you first install the preset of your choice, such as the es2015 preset, by running `npm install babel-preset-es2015 --save-dev`.

Next you add the preset to your `.babelrc` file like so

```javascript
{
  "presets": ["es2015"]
}
```

## Running the Preset

To demonstrate the power of the preset I've added a class to [`index.js`](src/index.js). If we were to run the build command with this code in the previous example only the default parameters and template strings would have been transformed; the class syntax would remain the same. 

However if we now run `npm run build` and check the output we see that Babel transforms the class into es5 syntax.

### Other presets

There are other presets available from the [Babel website](http://babeljs.io/docs/plugins/#presets) such as one for each ECMAScript stage (more on stages [here](https://github.com/tc39/ecma262) and [here](https://tc39.github.io/process-document/)), and one for React.

There are a lot more [avaliable on NPM](https://www.npmjs.com/search?q=babel-preset).
