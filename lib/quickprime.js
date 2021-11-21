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

/**
 *	Get random prime number less than a number:
 *	@param {Number} x
 */
exports.getRandomPrimeLessThan = function (x) {
    var num = Math.floor(Math.random() * x);
    console.log(num, " ", this.isPrime(num));
    while(this.isPrime(num) == false) {
        num = num + 1;
    }
    return num;
};

/**
 *	Get random prime number between range x and y where y > x
 *	@param {Number, Number} x, y
 */
exports.getRandomPrimeInRange = function (x, y) {
    var num = null;
    if (y - x > 0) {
        num = Math.floor(Math.random() * (y - x));
        while(this.isPrime(num) == false) {
            num = num + 1;
        }
    } else {
     throw "Not a valid range";   
    }
    return num;
};

/**
 *	Get random prime number above a number
 *	@param {Number, Number} x, y
 */
exports.getRandomPrimeAboveNumber = function (x) {
    var num = this.getRandomPrimeInRange(x, (x * 10) - 1);
    return num;
};

/**
 *	Get random prime number above a million
 *	@param {Number, Number} x, y
 */
exports.getRandomPrimeAboveMillon = function () {
    var x = 1000000;
    var num = this.getRandomPrimeInRange(x, (x * 10) - 1);
    return num;
};

/**
 *	Get random prime number above a million * x
 *	@param {Number} x
 */
exports.getRandomPrimeAboveMillonFactor = function (x) {
    var num = this.getRandomPrimeAboveNumber(x * 1000000);
    return num;
};

/**
 *	Get random prime number above a billion
 *	@param {Number, Number} x, y
 */
exports.getRandomPrimeAboveBillon = function () {
    var x = 1000000000;
    var num = this.getRandomPrimeInRange(x, (x * 10) - 1);
    return num;
};
