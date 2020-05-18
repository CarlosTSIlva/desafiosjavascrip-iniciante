const nome = 'Carlos';
const peso = 888;
const altura = 1.88;
const imc = peso / (altura * altura);
if (imc >= 30) {
	mensagem = `${nome} Voce esta a cima do peso`;
} else {
	mensagem = `${nome} Voce nao esta a cima do peso`;
}

console.log(mensagem);
