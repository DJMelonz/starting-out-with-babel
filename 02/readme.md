# 2. Telling Babel to transform

Let's get cracking with tranformations.

## Diagnosing problems with the Doctor

A nice way to tell if there are any issue with Babel is to run the [`babel-doctor`](http://babeljs.io/blog/2015/11/03/babel-doctor) command which is part of `babel-cli`. Try this now by typing `npm run doctor` into the command line.

Runing this inside the [01](../01) directory outputs the following

```shell
× Found no .babelrc config
√ No duplicate babel packages found
√ All babel packages appear to be up to date
√ You're on npm >=3.3.0
```

Ahh so we're missing a configuration file, [`.babelrc`](http://babeljs.io/docs/usage/babelrc/), in which we can specify Babel API options.  

## Configuring Babel

Let's create the `.babelrc` file in the root of the [02](02) directory by running `npm run babelrc`, you should now see the file with the contents of

```shell
{} 
```

Running `npm run doctor` now gives you a full set of green ticks! But we still haven't told Babel to run any plugins.

### Configuring plugins

To enable transformation of the default parameters we need to add the [ES2015 parameters transform](npm install babel-plugin-transform-es2015-parameters), we can add the transform plugin by running `npm install babel-plugin-transform-es2015-parameters --save-dev`. The `--save-dev` flag will save a reference to the package in the `devDependencies` section of the `package.json` file.

### Adding plugins to config

So now we have the plugin installed let's add it to the `.babelrc` config file. Your file should look like this

```javascript
{
    "plugins": ["transform-es2015-parameters"]
}
```

Now when we run `npm run build` we see that the default parameters have been transformed!

### Configure template strings

Now that default parameters are being transformed, lets do the same for template strings. To do this we'll need to use the [ES2015 template literals transform](http://babeljs.io/docs/plugins/transform-es2015-template-literals/) transform plugin.

Run `npm install babel-plugin-transform-es2015-template-literals --save-dev` in the command line, then head over to the `.babelrc` file once again and add `"transform-es2015-template-literals"` to the plugins array. Your config file should look like this

```javascript
{
    "plugins": [
        "transform-es2015-parameters",
        "transform-es2015-template-literals"
    ]
}
```

Run `npm run build` in the command line and et voila, template strings have been transformed into es5 syntax!

## Transform all the things!

As you can probably tell this would quickly become very time consuming as you start using more es2015 features. In the next section we'll look at ways to simplify our workflow.
