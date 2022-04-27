module.exports.cadastro = function(application,req,res){
	res.render('cadastro', {validacao:{},dadosForm:{}});
}


module.exports.cadastrar = function(application,req,res){
	//res.send('teste - vamos cadastrar');
	var dadosForm=req.body;

	req.assert('nome', 'Nome não pode ser vazio').notEmpty();
	req.assert('usuario', 'Nome não pode ser vazio').notEmpty();
	req.assert('senha', 'Nome não pode ser vazio').notEmpty();
	req.assert('casa', 'Nome não pode ser vazio').notEmpty();

	var erros = req.validationErrors();
	if(erros){
		//res.send('existem erros no formulário');
		res.render('cadastro',{validacao:erros, dadosForm:dadosForm});
		return;
	}
	res.send('podemos cadastrar')

}