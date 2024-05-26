const { facadeConfig } = require('facade-js/webpack')

module.exports = facadeConfig({
    root: __dirname,
    clientEntry: './src/client.ts',
    serverEntry: './src/server.ts',
    clientOutput: './public',
    serverOutput: './dist',
})
