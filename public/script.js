const catalogo = [
  {
    id: 1,
    titulo: "A Viagem de Chihiro",
    tipo: "filme",
    ano: 2001,
    generos: ["fantasia", "aventura"],
    nota: 9.5,
    assistido: true
  },

  {
    id: 2,
    titulo: "Goblin",
    tipo: "serie",
    ano: 2016,
    generos: ["romance", "fantasia"],
    nota: 9.2,
    assistido: true
  },

  {
    id: 3,
    titulo: "The Batman",
    tipo: "filme",
    ano: 2022,
    generos: ["ação"],
    nota: 8.5,
    assistido: false
  },

  {
    id: 4,
    titulo: "Piratas do Caribe: O Baú da Morte",
    tipo: "filme",
    ano: 2006,
    generos: ["ação", "aventura"],
    nota: 8.8,
    assistido: true
  },

  {
    id: 5,
    titulo: "Round 6",
    tipo: "serie",
    ano: 2021,
    generos: ["drama", "suspense"],
    nota: 8.0,
    assistido: true
  },

  {
    id: 6,
    titulo: "Once Upon a Time",
    tipo: "serie",
    ano: 2011,
    generos: ["fantasia", "drama"],
    nota: 8.2,
    assistido: false
  }
];
console.log(catalogo);
console.log(catalogo[0].titulo);
console.log(catalogo[catalogo.length - 1].ano);
if (catalogo[2].generos[1]) {
  console.log(catalogo[2].generos[1]);
} else {
  console.log("O terceiro item possui apenas um gênero.");
}
catalogo.forEach(item => {
  console.log(`[${item.tipo}] ${item.titulo} (${item.ano})`);
});
const titulosEmCaixaAlta = catalogo.map(item => {
  return item.titulo.toUpperCase();
});

console.log(titulosEmCaixaAlta);
const naoAssistidos = catalogo.filter(item => {
  return item.assistido === false;
});

console.log("Não assistidos:", naoAssistidos.length);
const destaque = catalogo.find(item => {
  return item.nota >= 9;
});

if (destaque) {
  console.log(destaque.titulo, destaque.nota);
} else {
  console.log("Nenhum item encontrado.");
}
const somaNotas = catalogo.reduce((acumulador, item) => {
  return acumulador + item.nota;
}, 0);

const media = somaNotas / catalogo.length;

console.log(media.toFixed(2));
const assistidos = catalogo.filter(item => item.assistido);

const somaAssistidos = assistidos.reduce((acc, item) => {
  return acc + item.nota;
}, 0);

const mediaAssistidos = somaAssistidos / assistidos.length;

console.log(mediaAssistidos.toFixed(2));
const antigo = catalogo.some(item => item.ano < 2000);

console.log(antigo);
const temGenero = catalogo.every(item => item.generos.length > 0);

console.log(temGenero);
const filmes = catalogo.filter(item => item.tipo === "filme");
const series = catalogo.filter(item => item.tipo === "serie");
const ranking = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);
  const output = document.getElementById("output");

output.innerHTML = `
  <h2>Resumo</h2>

  <p>Total de itens: ${catalogo.length}</p>

  <p>Filmes: ${filmes.length}</p>

  <p>Séries: ${series.length}</p>

  <p>Não assistidos: ${naoAssistidos.length}</p>

  <p>Média geral: ${media.toFixed(2)}</p>

  <h3>Top 3</h3>

  <ul>
    ${ranking.map(item => `
      <li>${item.titulo} - Nota ${item.nota}</li>
    `).join("")}
  </ul>
`;