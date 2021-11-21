'use strict';

/**
 *	Is the number prime:
 *	@param {Number} x
 */
exports.isPrime = function (x) {
        var n = 0;
        var i = 0;
        var is_prime = true;
        if (x > 1) {
                n = ((x / 2) | 0);
                for (i = 2; i < Math.floor(Math.sqrt(n) + 1); i++) {
                        if (x % i == 0) {
                                is_prime = false;
                                break;
                        }
                }
        }
        else {
                is_prime = false;
        }
        return is_prime;
};

// var x = 14;
// console.log(x + ' ' + this.isPrime(x));

// exports.randomPrime = function () {
//         var r = Math.random() + 1;
//         while (this.isPrime(r) == false) {
//                 r = Math.random() + 1;
//         }
//         return r;
// }

// console.log(this.randomPrime());