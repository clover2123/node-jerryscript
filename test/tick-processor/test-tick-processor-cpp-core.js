'use strict';
const common = require('../common');

if (!common.enoughTestCpu)
  common.skip('test is CPU-intensive');

if (common.isCPPSymbolsNotMapped) {
  common.skip('C++ symbols are not mapped for this os.');
}

const base = require('./tick-processor-base.js');

base.runTest({
  pattern: /RunInDebugContext/,
  code: `function f() {
           require('vm').runInDebugContext('Debug');
           setImmediate(function() { f(); });
         };
         f();`
});
