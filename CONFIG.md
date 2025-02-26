# Config parameters and it usage

  First a launcher.config.json must have all of these parameters, if not create and put them at the root folder of the
  project and paste all code below

```json
{
  "compilerOptions":{
    "baseUrl": "",
    "outDir": "",
    "mapName": "",
    "scripts":{
      "minify": false,
      "optimize": false,
    }
  },

  "game":{
    "executable": "",
    "args": [""]
  }
}
```

  Now to the parameters.

>NOTE: **Most of the features introduced in this customized version is WIP, bug is expected and even may not implemented yet!**

## Compiler Options (compilerOptions)

  This is the root config for the compiler, it contain all the value that the compiler needs to transform your code
  into lua

### `baseUrl` (`string`)

  A string that point to the directory of the maps folder, can be absolute or relative but not empty

  For example:

```json
{
  "compilerOptions":{
    "baseUrl": "./maps/unpacked/map.w3x"
  }
}
```

### `outDir` (`string`)

  A string that point to the directory of the result folder, can be absolute or relative and empty.
  >NOTE: It must match the one that you set in tsconfig.json

  For example:

```json
{
  "compilerOptions":{
    "outDir": "./dist/bin"
  }
}
```

### `mapName` (`string`)

  A string that is actually the name of the maps for example

```json
{
  "compilerOptions":{
    "mapName": "map.w3x"
  }
}
```

>NOTE: If it empty or the path is invalid, then by default it will return the maps to the root folder of the project

### `scripts` (`object` contain `minify`, `optimize`)

  An object the specify what happen to the maps script after it transpiled into lua. It happen as same as the name on the config implies

- `minify` (`boolean`)

  Minify the scripts after it transpiled

- `optimize` (`boolean`) [***WIP***]

  Enable engine optimization, this include constant folding, etc.

For example:

```json
{
  "compilerOptions":{
    "scripts": {
      "minify": false,
      "optimize": false
    }
  }
}
```

## Game Options (game)

  This config contain all required infomation about the warcraft executable

- `executable` (`string`)

  A string that point to the warcraft 3 directory or directly at it executable file.
- `args` (`string[]`)
  An array of command line options that will be passed to warcraft executable file when testing game
