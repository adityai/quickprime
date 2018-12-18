'use strict';

// if x > 1:
// n = x // 2
// for i in range(2, n + 1):
//     if x % i == 0:
//         return False
// return True
// else:
// return False

/**
 *	Is the number prime:
 *	@param {Number} x
 */
module.exports = function(x) {
  if (x > 1) {
          n = x % 2;
          for (i = 2; i < n + 1; i++) {
               if (x % i == 0) 
                process.stdout.write('false');
                return false;
               } 
               process.stdout.write('true');
               return true;
          }
          else {
                  return false;
          }
  };