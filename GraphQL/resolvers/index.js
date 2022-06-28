const { mergeResolvers  } = require('@graphql-tools/merge')
const blogResolver = require('./blogResolver')
const readerResolver = require('./readerResolver')
const blockResolver = require('./blockResolver')
const commentResolver = require('./commentResolver')
const { loadFilesSync } = require("@graphql-tools/load-files");
// const productType = require('./productType')
const path = require("path");
console.log(__dirname);
const resolverFiles = loadFilesSync(path.join(__dirname, "resolvers"));

console.log('hello hello: ',resolverFiles)

// const types = [typeDefs]

const resolvers = [readerResolver,blogResolver,blockResolver,commentResolver]

module.exports = mergeResolvers(resolvers)