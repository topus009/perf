const fs = require(`fs`);
const path = require(`path`);

const writeToFile = (folder, name, content) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }

  const filePath = path.join(folder, `${name}.txt`);

  fs.writeFileSync(filePath, `${content}\n`, {encoding: `utf8`, flag: 'a'});
};

const makeReport = (time, name) => writeToFile(`./perf`, name, `${time}`);

module.exports = makeReport
