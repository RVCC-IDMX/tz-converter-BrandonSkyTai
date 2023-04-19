const moment = require('moment-timezone');
const yargs = require('yargs');

moment.tz.setDefault('America/New_York');
let formatstr = '';

const args = yargs
  .usage('Usage: node <script-file> <timezone>')
  .demandCommand(1, 'Please provide a timezone')
  .argv;

const targetTimezone = args._[0];
if (yargs.argv.format) { formatstr = 'dddd, MMMM do YYYY, h:mm:ss a'; }

console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format(formatstr)}`);
