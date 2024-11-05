// let personagem = {
//     nome: "",
//     raca: "",
//     atributos: {
//         hp: 0,
//       forca: 0,
//         agilidade: 0,
//         inteligencia: 0,
//     },
//     arma: ""
// };

// const armasdeforca = ["Espada", "Machado"];
// const armasdeagilidade = ["Arco e flecha", "Duas facas"];
// const armasdeinteligencia = ["Cajado", "Grimório"];

// function rolarDado() {
//     return Math.floor(Math.random() * 6) + 1;
// }

// function escolherArma() {
//     personagem.arma = prompt(`Qual arma você escolherá? 
//     Você pode escolher entre:
//     - Espada e Machado (para mais força)
//     - Arco e flecha, Duas facas (para mais agilidade)
//     - Cajado, Grimório (para mais inteligência)`);

//     const armasValidas = [...armasdeforca, ...armasdeagilidade, ...armasdeinteligencia];

//     if (!armasValidas.includes(personagem.arma)) {
//         alert("Arma inválida, escolha novamente.");
//         escolherArma(); // Tentar novamente
//     }
// }

// function calcularDano() {
//     let valordano = rolarDado();
//     if (armasdeforca.includes(personagem.arma)) {
//         valordano += personagem.atributos.forca;
//     } else if (armasdeagilidade.includes(personagem.arma)) {
//         valordano += personagem.atributos.agilidade;
//     } else if (armasdeinteligencia.includes(personagem.arma)) {
//         valordano += personagem.atributos.inteligencia;
//     }
//     console.log(`Dano causado: ${valordano}`);
//     return valordano;
// }

// function start() {
//     personagem.nome = prompt('Qual o seu nome?');
//     personagem.raca = prompt(`OK, ${personagem.nome}. Qual raça você escolherá? Humano, Elfo, Anão ou Hobbit?`);

//     let atributos = 6;

//     let forca = parseInt(prompt(`Você terá 6 pontos para distribuir. Quantos pontos para força?`));
//     atributos -= forca;

//     let agilidade = parseInt(prompt(`Você ainda tem ${atributos} pontos. Quantos para agilidade?`));
//     atributos -= agilidade;

//     let inteligencia = parseInt(prompt(`Você tem ${atributos} pontos restantes. Quantos para inteligência?`));
//     atributos -= inteligencia;

//     switch (personagem.raca) {
//         case "Humano":
//             personagem.atributos.forca = forca + 1;
//             personagem.atributos.agilidade = agilidade + 1;
//             personagem.atributos.inteligencia = inteligencia + 1;
//             break;
//         case "Elfo":
//             personagem.atributos.forca = forca - 1;
//             personagem.atributos.agilidade = agilidade + 3;
//             personagem.atributos.inteligencia = inteligencia + 1;
//             break;
//         case "Anão":
//             personagem.atributos.forca = forca + 3;
//             personagem.atributos.agilidade = agilidade - 1;
//             personagem.atributos.inteligencia = inteligencia + 1;
//             break;
//         case "Hobbit":
//             personagem.atributos.forca = forca - 1;
//             personagem.atributos.agilidade = agilidade + 1;
//             personagem.atributos.inteligencia = inteligencia + 3;
//             break;
//         default:
//             alert("Raça inválida!");
//             return start(); // Reinicia a criação
//     }

//     personagem.atributos.hp = personagem.atributos.forca * 6 + 10;
   

//     escolherArma();

//     alert(`Personagem criado!
//     Nome: ${personagem.nome}
//     Raça: ${personagem.raca}
//     HP: ${personagem.atributos.hp}
//     Força: ${personagem.atributos.forca}
//     Agilidade: ${personagem.atributos.agilidade}
//     Inteligência: ${personagem.atributos.inteligencia}
//     Arma: ${personagem.arma}`);

//     console.log(personagem);
// }

// function aventura() {
//     let resposta = prompt(`Olá, ${personagem.nome}. Frodo está na montanha da perdição. Aragorn está distraindo o exército de Sauron, no entanto, um mago Goblin chamado Huhjia consegue sentir a presença de Frodo. Derrote ele antes que ele entregue a posição do Hobbit. Está pronto? (ok/sair)`);

//     if (resposta.toLowerCase() === "ok") {
//         let rolar = prompt("Prepare-se para a batalha! No pé da montanha você se depara com 3 orcs. Hora de lutar. Escreva 'rolar' e veremos quem ataca primeiro.");

//         if (rolar.toLowerCase() === "rolar") {
//             let jogadorIniciativa = rolagem();
//             let orcsIniciativa = rolagem();

//             alert(`Sua iniciativa: ${jogadorIniciativa}`);
//             alert(`Iniciativa dos orcs: ${orcsIniciativa}`);

//             if (jogadorIniciativa >= orcsIniciativa) {
//                 alert("Você ataca primeiro!");
//                 combate();
//             } else {
//                 alert("Os orcs atacam primeiro!");
//                 combate();
//             }
//         } else {
//             alert("Você fugiu da aventura...");
//         }
//     } else {
//         alert("Você desistiu da missão...");
//     }
// }

// function rolagem() {
//     return Math.floor(Math.random() * 20) + 1; // Rolagem de um dado de 20 lados
// }
 



// function combate() {
//     let orc = { hp: 10, ataque: 2, defesa: 1 };
//     let danoCausado = calcularDano();

//     orc.hp -= danoCausado;
//     alert(`Você causou ${danoCausado} de dano! O orc tem agora ${orc.hp} HP.`);
//     console.log(`Orc HP: ${orc.hp}`);
// }

// // Inicia o jogo
// start();
// aventura();
