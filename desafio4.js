const dados = {
	propriedade: [
		{
			nome: 'Carlos',
			idade: 32,
			tecnologia: ' C++',
			especificaçoes: ' Desktop '
		},
		{
			nome: 'George',
			idade: 52,
			tecnologia: ' Python',
			especificaçoes: ' Data Science '
		},
		{
			nome: 'Pedrox',
			idade: 18,
			tecnologia: ' JavaScript',
			especificaçoes: ' Web/Mobile '
		}
	]
};

console.log(
	'O usuario',
	dados.propriedade[0].nome,
	'tem',
	dados.propriedade[0].idade,
	'anos e usa a tecnologia',
	dados.propriedade[0].tecnologia,
	'com especificaçoes em ',
	dados.propriedade[0].especificaçoes
);
