'use strict';

const chalk = require('chalk');
const benchmarkStart = require('./benchmarkStart');

const NS_PER_SEC = 1e9;
const MS_PER_NS = 1e-6;

const end = ({
  timer,
  showTimeInTerminal,
  inSeconds,
  inMiliseconds,
  toFixedCount
}) => {
  const diff = benchmarkStart(timer);
  let endTime = diff[0] * NS_PER_SEC + diff[1];

  const timeInMS = endTime * MS_PER_NS;
  const timeInS = endTime / NS_PER_SEC;

  if(showTimeInTerminal) {
    if(inMiliseconds) {
      console.log(chalk.red('Benchmark: '), `${chalk.green(timeInMS)} ms`);
    }
    if(inSeconds) {
      console.log(chalk.red('Benchmark: '), `${chalk.green(timeInS)} s`);
    }
  }

  if(inSeconds) {
    endTime = timeInMS;
  } else if(inMiliseconds) {
    endTime = timeInS;
  }

  if(toFixedCount) {
    return endTime.toFixed(toFixedCount);
  }

  return endTime;
};

module.exports = end;
