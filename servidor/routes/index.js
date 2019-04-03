const conexao = require('./../model/ConnectionDB')

var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());



const pdfRepository_ = require('./../model/PdfRepository')
const pdfRepository = new pdfRepository_(conexao);




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req,res){
  console.log('alow');
  let {nome, caminho,descricao,dataCriacao} = req.body;
  console.log(nome, ' ',caminho,' ',descricao, '  ')

  pdfRepository.insert({
    'nome': nome,
    'caminho': caminho,
    'descricao': descricao,
    'dataCriacao': new Date.now() 
  }).then((resp) =>{
    res.status(200).json(req.body);
  }).catch((err) =>{
    res.status(404).json(req.body);
  });
})


module.exports = router;
