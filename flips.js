import { coinFlips } from "./modules/coin.mjs";
import { coinFlip } from "./modules/coin.mjs";
import { countFlips } from "./modules/coin.mjs";

import minimist from 'minimist'

const args = minimist(process.argv.slice(2))
const num  = args['number'] //|| 1

var flips = coinFlips(num)
console.log(flips)
console.log(countFlips(flips))
console.log(args)