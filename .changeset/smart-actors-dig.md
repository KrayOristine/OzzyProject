---
"war3-ozzyproject": patch
---

- Add actor and damage system
- Improve and optimize compiler
- Modify compiler to not use process.spawn to transpile ts to lua
- Optimize `FourCC`, `FourCCArray` compiletime function
- Remove unused and unnecessary `FourCCPure` as compiletime function
- Improved luamin, added (all can be configured):
  - automatic inlining (on by default)
  - automatic constant folding (on by default)
  - automatic localizer (off by default)
- Optimize game script
- Bump deps version
- Improve github action workflows
- Change code of conduct
