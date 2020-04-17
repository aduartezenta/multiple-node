// const fs = require('fs');

// for (let y = 1; y <= 10; y++) {

//     let data = ''
//     for (let i = 1; i <= 10; i++) {
//         data += `${y} x ${i} = ${2*i}\n`;
//     }

//     fs.writeFile(`tables/table${y}.txt`, data, (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!');
//     });
// }

// const multiply = require('./multiply/multiply');
const argv = require('./config/yargs').argv
const { generateFile, listTable } = require('./multiply/multiply');
const colors = require('colors');

let base = argv.base
let limit = argv.limit
let command = argv._[0]

switch (command) {
    case 'list':
        listTable(base, limit)
            .then((result) => console.log(result.red))
            .catch((err) => console.log(err));
        break
    case 'create':
        generateFile(base, limit)
            .then((result) => console.log(result.green))
            .catch((err) => console.log(err));
        break
    default:
        console.log('Comando no reconocido');
        break
}