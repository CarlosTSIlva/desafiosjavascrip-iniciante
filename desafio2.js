const nome = 'Jao';
const sexo = 'M';
const idade = 68;
const contribuicao = 25553;

const tempodecontribuicao = contribuicao + idade;

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && tempodecontribuicao >= 95;
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && tempodecontribuicao >= 85;

if (homemPodeAposentar || mulherPodeAposentar) {
	console.log(`${nome} você pode se aposentar!!`);
} else {
	console.log(`${nome} você nao pode se aposentar!!`);
}
