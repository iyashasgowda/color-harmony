# color-harmony

Color harmony is a basic color theory technique for combining colors. This technique suggests potential relationships between colors that we can use to convey our messages or create a particular universe.

[NPM](https://www.npmjs.com/package/@iyashasgowda/color-harmony)

## Description

A javascript library that creates color scales/harmonies by rotating the hue of the given color.

## Getting Started

Install the module with: `npm install @iyashasgowda/color-harmony`

```javascript
const Harmony = require('@iyashasgowda/color-harmony');

const rgb = {
   r: 126,
   g: 87,
   b: 43,
};

const harmony = new Harmony(rgb);
console.log(harmony.complement());
/** returns = [
     { r: 42, g: 81, b: 125 }
 ] */

console.log(harmony.splitComplement());
/** returns = [
     { r: 42, g: 122, b: 125 }, 
     { r: 45, g: 42, b: 125 } 
 ] */

console.log(harmony.analogous());
/** returns = [
     { r: 122, g: 125, b: 42 }, 
     { r: 81, g: 125, b: 42 }
] */

console.log(harmony.triadic());
/** returns = [
   { r: 42, g: 125, b: 86 },
   { r: 86, g: 42, b: 125 },
] */

console.log(harmony.tetradic());
/** returns = [
   { r: 42, g: 125, b: 45 },
   { r: 42, g: 81, b: 125 },
   { r: 125, g: 42, b: 122 },
] */
```

#### Complementary

Two colors that are on opposite sides of the color wheel. This combination provides a high contrast and high impact
color combination – together, these colors will appear brighter and more prominent.

#### Split Complementary

Primary color with two analogous colors in the color wheel. This combination has strong contrast as the complementary color.

#### Analogous

Three colors that are side by side on the color wheel. This color combination is versatile, but can be overwhelming.
To balance an analogous color scheme, choose one dominant color, and use the others as accents.

#### Triadic

Three colors that are evenly spaced on the color wheel. This provides a high contrast color scheme, but less so than the
complementary color combination — making it more versatile. This combination creates bold, vibrant color palettes.

#### Tetradic

Four colors that are evenly spaced on the color wheel. Tetradic color schemes are bold and work best if you let one color be
dominant, and use the others as accents. The more colors you have in your palette, the more difficult it is to balance,

### Available Harmony Names (and their associated degrees of hue rotation)

-  complementary: [0,180]
-  splitComplementary: [0,150,210]
-  analogous: [0,30,60]
-  triadic: [0,120,240]
-  tetradic: [0,90,180,270]

## License

Copyright (c) 2022 Yashas Gowda [iyashasgowda]  
Licensed under the MIT license.
