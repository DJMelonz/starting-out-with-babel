# 1. Adding the code and running Babel

Inside the `src` directory some code has been added which takes advantage of the es2015 [import](http://www.ecma-international.org/ecma-262/6.0/#sec-imports) & [export](http://www.ecma-international.org/ecma-262/6.0/#sec-exports) syntax, as well as [`let` declarations](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-let-and-const-declarations).
 
## Running the code
 
Run `npm install && run build` (runs `npm start` only if `npm install` was successful).

## What happened?

You should see something like this

```shell
> babel src --out-dir dist

src\index.js -> dist\index.js
src\maths.js -> dist\maths.js
```

As you can see the command `babel src --out-dir dist` was run, this compiles the entire `src` directory and outputs it to the `dist` directory. 

If you check the files in the dist directory you'll notice that they haven't been transpiled, so what happened?

The [setup section on the Babel website](http://babeljs.io/docs/setup/#babel_cli) provides the answer: 

> Pre-6.x, Babel enabled certain transformations by default. However, Babel 6.x does not ship with any transformations enabled. You need to explicitly tell it what transformations to run.

So in this futuristic Babel 6 land the plugin does nothing by default, which explains why our code didn't change! 

That's great but how do we tell Babel what we'd like to transform? Let's move onto the next section to find out. 
