#!/usr/bin/env node

import {makeApp} from '@snek-at/function-server'

import sfi, {typeDefs} from './build/sfi.module.js'

const app = makeApp({
  schema: {
    typeDefs: typeDefs,
    resolvers: sfi.graphqlResolvers
  },
  configureApp: sfi.configureApp
})

const port = process.argv[2] || 3000

app.listen(port, () => {
  console.log(`
    🚀 Server ready at http://localhost:${port}/graphql`)
})
