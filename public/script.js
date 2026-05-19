const catalogo = [
  {
    id: 1,
    titulo: "A Viagem de Chihiro",
    tipo: "filme",
    ano: 2001,
    generos: ["fantasia", "aventura"],
    nota: 9.5,
    assistido: true,
  },

  {
    id: 2,
    titulo: "Goblin",
    tipo: "serie",
    ano: 2016,
    generos: ["romance", "fantasia"],
    nota: 9.2,
    assistido: true,
  },

  {
    id: 3,
    titulo: "The Batman",
    tipo: "filme",
    ano: 2022,
    generos: ["ação"],
    nota: 8.5,
    assistido: false,
  },

  {
    id: 4,
    titulo: "Piratas do Caribe: O Baú da Morte",
    tipo: "filme",
    ano: 2006,
    generos: ["ação", "aventura"],
    nota: 8.8,
    assistido: true,
  },

  {
    id: 5,
    titulo: "Round 6",
    tipo: "serie",
    ano: 2021,
    generos: ["drama", "suspense"],
    nota: 8.0,
    assistido: true,
  },

  {
    id: 6,
    titulo: "Once Upon a Time",
    tipo: "serie",
    ano: 2011,
    generos: ["fantasia", "drama"],
    nota: 8.2,
    assistido: false,
  },
];

console.log(catalogo);

console.log("Primeiro título:", catalogo[0].titulo);

console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos[1]) {
  console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
  console.log("O terceiro item possui apenas um gênero.");
}

console.log("==== LISTAGEM ====");

catalogo.forEach(item => {
  console.log(`[${item.tipo}] ${item.titulo} (${item.ano})`);
});


const titulosEmCaixaAlta = catalogo.map(item => {
  return item.titulo.toUpperCase();
});

console.log("==== TÍTULOS EM MAIÚSCULO ===");
console.log(titulosEmCaixaAlta);


const naoAssistidos = catalogo.filter(item => {
  return item.assistido === false;
});

console.log("Quantidade de não assistidos:", naoAssistidos.length);


const destaque = catalogo.find(item => {
  return item.nota >= 9;
});

if (destaque) {
  console.log("Destaque:", destaque.titulo, "- Nota:", destaque.nota);
} else {
  console.log("Nenhum item encontrado.");
}


const somaNotas = catalogo.reduce((acumulador, item) => {
  return acumulador + item.nota;
}, 0);

const mediaGeral = somaNotas / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);

const somaAssistidos = assistidos.reduce((acumulador, item) => {
  return acumulador + item.nota;
}, 0);

const mediaAssistidos = somaAssistidos / assistidos.length;

console.log("=== MÉDIAS ===");

console.log("Média geral:", mediaGeral.toFixed(2));

console.log("Média assistidos:", mediaAssistidos.toFixed(2));


const existeAntigo = catalogo.some(item => item.ano < 2000);

const todosTemGenero = catalogo.every(item => item.generos.length > 0);

console.log("=== VERIFICAÇÕES ===");

console.log("Existe item antes de 2000?", existeAntigo);

console.log("Todos possuem gênero?", todosTemGenero);


const filmes = catalogo.filter(item => item.tipo === "filme");

const series = catalogo.filter(item => item.tipo === "serie");


const ranking = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);


const output = document.getElementById("output");

output.innerHTML = `
  <p class="info">
    Total de itens: <strong>${catalogo.length}</strong>
  </p>

  <p class="info">
    Filmes: <strong>${filmes.length}</strong>
  </p>

  <p class="info">
    Séries: <strong>${series.length}</strong>
  </p>

  <p class="info">
    Não assistidos: <strong>${naoAssistidos.length}</strong>
  </p>

  <p class="info">
    Média geral: <strong>${mediaGeral.toFixed(2)}</strong>
  </p>

  <h3 style="margin-top:20px; margin-bottom:10px; color:#ffd369;">
    Top 3 Melhores Avaliados
  </h3>

  <ul>
    ${ranking.map(item => `
      <li>
        ${item.titulo} - ${item.nota}
      </li>
    `).join("")}
  </ul>
`;
