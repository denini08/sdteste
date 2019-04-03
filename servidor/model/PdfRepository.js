const mongoose = require('mongoose');

class PdfRepository {
    constructor(connection) {
        this.connection = connection;
        this.schema = new mongoose.Schema({
            nome: { type: String, required: true },
            caminho: { type: String, required: true },
            descricao: { type: String, required: false },
            dataCriacao: { type: Date, required: true }
        });
        this.pdfModel = this.connection.model('Pdf', this.schema);
    }

    insert(pdfParam) {
      console.log('ROLINHA: ', pdfParam);
        return new Promise((resolve, reject) => {
            const pdf = new this.pdfModel(pdfParam);
            pdf.save((err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    removeById(id) {
        return new Promise((resolve, reject) => {
            this.pdfModel.findOneAndRemove({ _id: { $eq: id } }, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });

        });
    }

    findAll() {
        return new Promise((resolve, reject) => {
            this.pdfModel.find((err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    updateById(id, pdfNovo) {
        return new Promise((resolve, reject) => {
            this.PdfRepository.findOneAndUpdate({
                _id: id
            }, {
                $set: {
                    nome: pdfNovo.nome,
                    caminho: pdfNovo.caminho,
                    descricao: pdfNovo.descricao,
                }
            }, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }
}

module.exports = PdfRepository;