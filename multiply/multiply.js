const fs = require('fs');
// let generateFile = async(base) => {
//     for (let i = 1; i <= 10; i++) {
//         data += `${base} x ${i} = ${2*i}\n`;
//     }

//     let path = 'tables/'
//     var fileName = `${path}table${base}.txt`
//     fs.writeFile(fileName, data, (err) => {
//         if (err) throw err;
//         return "fileName"
//     });
// }

let listTable = (base, limit) => {
    return new Promise((resolve, rejection) => {
        if (!Number(base)) {
            rejection(`El valor ingresado ${base} no es un número`)
            return
        }
        if (!Number(limit)) {
            rejection(`El valor ingresado ${limit} no es un número`)
            return
        }

        let data = ''
        for (let i = 1; i <= limit; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        }
        resolve(data);
    })
}

let generateFile = (base, limit) => {

    return new Promise((resolve, rejection) => {
        if (!Number(base)) {
            rejection(`El valor ingresado ${base} no es un número`)
            return
        }
        if (!Number(limit)) {
            rejection(`El valor ingresado ${limit} no es un número`)
            return
        }

        let data = ''
        for (let i = 1; i <= limit; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        }

        let path = 'tables/'
        let fileName = `${path}table-${base}-al-${limit}.txt`
        fs.writeFile(fileName, data, (err) => {
            if (err) rejection(err);
            resolve(fileName)
        });
    })
}

module.exports = {
    generateFile,
    listTable
}