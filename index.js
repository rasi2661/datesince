function yearsSince(longago, today) {
  let diffTime = Math.abs(today - longago);
  let diffYears = diffTime / (1000 * 60 * 60 * 24 * 365);
  return diffYears;
}

function daysSince(longago, today) {
  let diffTime = Math.abs(today - longago);
  let diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays;
}

function hoursSince(longago, today) {
  let diffTime = Math.abs(today - longago);
  let diffHours = diffTime / (1000 * 60 * 60);
  return diffHours;
}

function secondsSince(longago, today) {
  let diffTime = Math.abs(today - longago);
  let diffSeconds = diffTime / (1000 * 60);
  return diffSeconds;
}

function msSince(longago, today) {
  let diffTime = Math.abs(today - longago);
  let diffMS = diffTime / (1000);
  return diffMS;
}

module.exports = function (longago) {
  let today = new Date();
  return {
    years: yearsSince(longago, today),
    days: daysSince(longago, today),
    hours: hoursSince(longago, today),
    seconds: secondsSince(longago, today),
    milliseconds: msSince(longago, today)
  }
}
