const { Task } = require('@dotcom-tool-kit/types')
const rollup = require('rollup')
const loadConfigFile = require('rollup/dist/loadConfigFile')
const path = require('path')

class Rollup extends Task {
  async run() {
    const config = path.join(process.cwd(), 'tooling/rollup/client.js')
    const { options, warnings } = await loadConfigFile(config)

    warnings.flush()

    // TODO logging
    for (const optionsObj of options) {
      const bundle = await rollup.rollup(optionsObj)
      await Promise.all(optionsObj.output.map(bundle.write))
    }
  }
}

exports.tasks = [Rollup]