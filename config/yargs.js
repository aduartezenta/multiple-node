const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('list', 'Imprime la tabla de multiplicar', opts)
    .command('create', 'Crea la tabla de multiplicar', opts)
    .argv

module.exports = {
    argv
}