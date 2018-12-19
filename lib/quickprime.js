'use strict';

/**
 *	Is the number prime:
 *	@param {Number} x
 */
module.exports = function(x) {
var n = 0;
var i = 0; 
  if (x > 1) {
          n = x % 2;
          for (i = 2; i < Math.floor(Math.sqrt(n) + 1); i++) {
               if (x % i == 0) 
                return false;
               } 
               return true;
          }
          else {
                  return false;
          }
  };
