const alunosdatumaA = [
	{
		nome: 'Mayk',
		nota: 9.8
	},
	{
		nome: 'Diego',
		nota: 10
	},
	{
		nome: 'Pedro',
		nota: 2
	}
];
const alunosdatumaB = [
	{
		nome: 'Henrique',
		nota: 10
	},
	{
		nome: 'Jao',
		nota: 10
	},
	{
		nome: 'Felix',
		nota: 2
	}
];

function calculodemedia(alunos) {
	for (let i = 0; i < alunos.length; i++) {
		console.log(i);
	}
}

const media1 = calculodemedia(alunosdatumaA);
const media2 = calculodemedia(alunosdatumaB);

function enviamensagem(media, turma) {
	if (media > 5) {
		console.log(`A media da turma ${turma} foi de ${media}, Parabens`);
	} else {
		console.log(`a media da turma ${turma} foi menor que 5`);
	}
}

enviamensagem(media1, 'turmaA');
enviamensagem(media2, 'turmaB');
