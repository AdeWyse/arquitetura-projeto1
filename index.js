import sys from 'node:sys';

import ReporterHTML from './src/ReporterHTML.js';
import FormaterTXT from './src/FormaterTXT.js';
import CitiesReporter from './src/CitiesReporter.js';

const [cmd, script, param1] = process.argv,
      filename = './data/cidades-2.json';

const formaterStrategies = {
  'html': new ReporterHTML(),
  'txt': new FormaterTXT()
};
const objectFormater = {
  formaterStrategy: formaterStrategies[param1]
}

const reporter = new CitiesReporter(objectFormater);

const output = reporter.report(filename);


console.log(output);






