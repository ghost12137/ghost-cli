const create = require('../../lib/create');

const createAction = (name, options) => {
  create(name, options)
}

module.exports = {
  command: 'create <app-name>',
  description: 'create a new project',
  option: [
    ['-f, --force', 'overwrite target directory if it exist']
  ],
  action: createAction
};