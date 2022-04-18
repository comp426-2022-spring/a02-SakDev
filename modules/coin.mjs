/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  return (Math.random() < 0.5 ? 'tails' : 'heads');
}

// console.log(coinFlip())

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  var flips_arr = [];

  if (!flips) {
    flips_arr.push(coinFlip());
  } else {
      for (var i=0;i<flips;i++){
        flips_arr.push(coinFlip());
      }
  }  

  return flips_arr
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
  var head_count=0;
  var tail_count=0;

  for (var i=0;i<array.length;i++){
    if (array[i]=='heads'){
      head_count++;
    }
    else{
      tail_count++;
    }
  }
 
  return "{ tails: " + tail_count + "," + "heads: " + head_count + " }";
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
  var flip=coinFlip();

  if (flipACoin==call){
    var result='win'
  }
  else{
    var result='lost'
  }

  return "{ call: '"+ call + "', flip: '" + flip + "', result: '" + result + "' }";
}


/** Export 
 * 
 * Export all of your named functions
*/
export {coinFlip};
export {coinFlips};
export {countFlips};
export {flipACoin};