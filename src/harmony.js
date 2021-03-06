'use strict';
const { hsv2rgb, rgb2hsv } = require('./utils');

class Harmony {
   constructor(rgb) {
      this.rgb = rgb;
   }

   complement() {
      let hsv = rgb2hsv(this.rgb);
      hsv.h += 180.0;
      while (hsv.h >= 360.0) hsv.h -= 360.0;
      while (hsv.h < 0.0) hsv.h += 360.0;
      return [hsv2rgb(hsv)];
   }

   splitComplement() {
      let hsv1 = rgb2hsv(this.rgb);
      let hsv2 = rgb2hsv(this.rgb);

      hsv1.h += 150.0;
      while (hsv1.h >= 360.0) hsv1.h -= 360.0;
      while (hsv1.h < 0.0) hsv1.h += 360.0;

      hsv2.h += 210.0;
      while (hsv2.h >= 360.0) hsv2.h -= 360.0;
      while (hsv2.h < 0.0) hsv2.h += 360.0;

      return [hsv2rgb(hsv1), hsv2rgb(hsv2)];
   }

   analogous() {
      let hsv1 = rgb2hsv(this.rgb);
      let hsv2 = rgb2hsv(this.rgb);

      hsv1.h += 30.0;
      while (hsv1.h >= 360.0) hsv1.h -= 360.0;
      while (hsv1.h < 0.0) hsv1.h += 360.0;

      hsv2.h += 60.0;
      while (hsv2.h >= 360.0) hsv2.h -= 360.0;
      while (hsv2.h < 0.0) hsv2.h += 360.0;

      return [hsv2rgb(hsv1), hsv2rgb(hsv2)];
   }

   triadic() {
      let hsv1 = rgb2hsv(this.rgb);
      let hsv2 = rgb2hsv(this.rgb);

      hsv1.h += 120.0;
      while (hsv1.h >= 360.0) hsv1.h -= 360.0;
      while (hsv1.h < 0.0) hsv1.h += 360.0;

      hsv2.h += 240.0;
      while (hsv2.h >= 360.0) hsv2.h -= 360.0;
      while (hsv2.h < 0.0) hsv2.h += 360.0;

      return [hsv2rgb(hsv1), hsv2rgb(hsv2)];
   }

   tetradic() {
      let hsv1 = rgb2hsv(this.rgb);
      let hsv2 = rgb2hsv(this.rgb);
      let hsv3 = rgb2hsv(this.rgb);

      hsv1.h += 90.0;
      while (hsv1.h >= 360.0) hsv1.h -= 360.0;
      while (hsv1.h < 0.0) hsv1.h += 360.0;

      hsv2.h += 180.0;
      while (hsv2.h >= 360.0) hsv2.h -= 360.0;
      while (hsv2.h < 0.0) hsv2.h += 360.0;

      hsv3.h += 270.0;
      while (hsv3.h >= 360.0) hsv3.h -= 360.0;
      while (hsv3.h < 0.0) hsv3.h += 360.0;

      return [hsv2rgb(hsv1), hsv2rgb(hsv2), hsv2rgb(hsv3)];
   }
}

module.exports = Harmony;
