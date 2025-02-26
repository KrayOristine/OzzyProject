# Config parameters and it usage

  First a config.json must have all of these parameters, if not create and put them at the root folder of the
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
      "encrypt": {
        "enable": false,

        "key": "",
        "salt": ""
      }
    },

    "protection":{
      "removeEditorOnly": false,
      "scrambleHeader": false,
      "obfuscateScripts": false,
      "obfuscateFileName": false,
      "obfuscateObjectId": false,
      "fakeScripts": false,
      "scrambleFile": false,
      "scrambleRepeat": 1
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

### `scripts` (`object` contain `minify`, `optimize`, `encrypt`)

  An object the specify what happen to the maps script after it transpiled into lua. It happen as same as the name on the config implies

- `constantFolding` (`boolean`)

  Enable constant folding

- `minify` (`boolean`)

  Minify the scripts after it transpiled

- `optimize` (`boolean`) [***WIP***]

  Enable engine optimization, this include constant folding, etc.

- `encrypt` (`object` contain `enabled`, `key`, `salt`) [***WIP***]

  Set "enabled" to true to enable this, this will stay as a simple encryption to protect your script from being learned by newbie and also protect against hacker that too lazy and not passionate enough to cheat the maps. This simply encrypt your code by using the key and salt and decrypt it at runtime.
  >NOTE: This will heavily hurt the performance as always as any anti-cheat and DRM

For example:

```json
{
  "compilerOptions":{
    "scripts": {
      "minify": false,
      "optimize": false,
      "encrypt": {
        "enabled": false,

        "key": "",
        "salt": "" // left empty for random salt
      }
    }
  }
}
```

### `protection` (`object`) [*WIP*]

  This contain utility thing to protect your maps from being learned by newbie and cheated by hackers who is too lazy to cheat the maps.

  Set the value to true to enable or false to disable

- `removeEditorOnly` (`boolean`): Remove all world editor required files. (These file are only used in world editor)
- `obfuscateScripts` (`boolean`): This can also optimize the performance a bits by renaming all function except for warcraft ones
- `scrambleHeader` (`boolean`): Corrupt the file header to prevent mpq editing
- `obfuscateFileName` (`boolean`): Modify all of the file name except for warcraft required main files.
- `obfuscateObjectId` (`boolean`): Modify all of the object id of the maps including but not excluded (unit, destructable, items, ability, upgrades, buff)
- `fakeScripts` (`boolean`): Place a dummy script that won't ever be read by warcraft
- `scrambleFiles` (`boolean`): Move all file to random position or rename it
- `scrambleRepeat` (`number`): Set to more than 1 to increase the amount of times the scramble file action will be executed (maximum at 5 to prevent some people that set it to large number for fun)

## Game Options (game)

  This config contain all required infomation about the warcraft executable

- `executable` (`string`)

  A string that point to the warcraft 3 directory or directly at it executable file.
- `args` (`string[]`)
  An array of command line options that will be passed to warcraft executable file when testing game
