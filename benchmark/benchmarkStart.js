'use strict';

const hrtime = process.hrtime;

const start = (time) => hrtime(time);

module.exports = start;
