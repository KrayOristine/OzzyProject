---
"war3-ozzyproject": patch
---

- Add actor and damage system
- Improve and optimize compiler
- Optimize `FourCC`, `FourCCArray` compiletime function
- Remove unused and unnecessary `FourCCPure` as compiletime function
- Added new compiler annotation
  - `/* @tsl.inline = 'X' */`
  (x must be one of value below, if no match then it default to no-inline)
    - no-inline (default)
    - normal: inline only when certain condition met
    - agressive: inline when possible (will harm performance when abused)
    - force: doesnt exist and doesnt do anything
  - ```/* @tsl.template = `X` */``` (X must be a valid lua code)
    - When a field method or function specified with this got invoked,
     it will be replaced by X
    - When a field member or variable specified with this get referenced,
      it will be replaced by X
    - Does support paramter passing with `{number}` format, number start from 0
      represent the first parameter passed to that function
- Improved luamin, added (all can be configured):
  - automatic inlining (on by default)
  - automatic constant folding (on by default)
  - automatic localizer (off by default)
- Optimize game script
- Bump deps version
- Improve github action workflows
- Change code of conduct
