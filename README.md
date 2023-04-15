# A Reproduction of [Objection#2277](https://github.com/Vincit/objection.js/issues/2277)

Reproduces TypeScript Error `TS2589: Type instantiation is excessively deep and possibly infinite.` when using `objection`.

The error occurs in the `delete` method of `src/index.ts`. To reproduce it, run `npm run build`.
