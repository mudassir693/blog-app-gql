const { mergeTypeDefs } = require('@graphql-tools/merge')
const blogDefs = require('./blogtypeDef')
const readerDefs = require('./readertypeDef')
const blockDefs = require('./blocktypeDef')
const commentTypeDef = require('./commentTypeDef')

// const { mergeTypeDefs } = require('graphql-tools-merge-typedefs');

// const productType = require('./productType')

const types = [readerDefs,blogDefs,blockDefs,commentTypeDef]

module.exports = mergeTypeDefs(types)