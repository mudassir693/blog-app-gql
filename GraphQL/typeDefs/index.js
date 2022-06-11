const { mergeTypeDefs } = require('@graphql-tools/merge')
const blogDefs = require('./blogtypeDef')
const readerDefs = require('./readertypeDef')
// const { mergeTypeDefs } = require('graphql-tools-merge-typedefs');

// const productType = require('./productType')

const types = [readerDefs,blogDefs]

module.exports = mergeTypeDefs(types)