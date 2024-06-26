const { facadeConfig } = require('@kogoshvili/facade/webpack')

module.exports = facadeConfig({
    root: __dirname,
    clientEntry: './src/client.ts',
    serverEntry: './src/server.ts',
    clientOutput: './public',
    serverOutput: './dist',
})
