# 1. Adding the code and running Babel

Inside the `src` directory some code has been added which takes advantage of es2015 [default parameters](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/default_parameters) and [template strings](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings).

## Running the code
 
Run `npm install && npm run build` (runs `npm build` only if `npm install` was successful) in the command line.

## What happened?

You should see something like this

```shell
> babel src --out-dir dist

src\index.js -> dist\index.js
src\maths.js -> dist\maths.js
```

As you can see the command `babel src --out-dir dist` was run, which compiles the entire `src` directory and outputs it to the `dist` directory. 

If you check the files in the dist directory you'll notice that they haven't been transpiled, so what happened?

The [setup section on the Babel website](http://babeljs.io/docs/setup/#babel_cli) provides the answer: 

> Pre-6.x, Babel enabled certain transformations by default. However, Babel 6.x does not ship with any transformations enabled. You need to explicitly tell it what transformations to run.

# Finishing up

In the futuristic land of Babel 6 no transformations happen by default, which explains why our code didn't change! 

That's great and all but how do we tell Babel what we'd like to transform? (_hint: try running `npm run doctor` in the command line_) Let's move onto the [next section](../02) to find out. 
