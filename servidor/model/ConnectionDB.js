
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/servidor';
let mongoConn = null;

const connection = mongoose.connect(uri, { useNewUrlParser: true }).then((resp) => {
    console.log('Conexao feita!');
}).catch((resp) => {
    console.log('DB ERROR: ', resp);
});
mongoose.Promise = global.Promise;

module.exports = connection; 
(() => {
    let error = '';
    const url = 'mongodb://localhost:27017/helpie';
    mongoConn = mongoose.connect(url, { useNewUrlParser: true }, (err) => {
        if (err) {
            throw Error('erro no db');
        }
        console.log('Conectado ao DB!');
    });
})();

module.exports = mongoConn;