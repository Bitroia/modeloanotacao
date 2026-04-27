const estado = {
  pupilae: null,
  pupilad: null,
  boca: null,
  narinae: null,
  narinad: null,
  torax: null,
  abdome: null,
  bracoe: null,
  bracod: null,
  pernae: null,
  pernad: null,
  pescoco: null,
};

document.getElementById("pernae").onclick = () => {
  estado.pernae = "Fixador externo em MIE, curativos limpos e secos.";
  atualizarTexto();
};

document.getElementById("pernad").onclick = () => {
  estado.pernad = "Tala engessada em MID";
  atualizarTexto();
};

document.getElementById("bracoe").onclick = () => {
  estado.bracoe =
    "Acesso venoso central, em vjie, recebendo em ambas vias cloreto de sódio a 4,1 ml/h, ambos em bomba de infusão contínua";
  atualizarTexto();
};

document.getElementById("bracod").onclick = () => {
  estado.bracod =
    "Monitorização de pressão arterial invasiva em artéria radial direita";
  atualizarTexto();
};

document.getElementById("neck").onclick = () => {
  estado.pescoco = "Traqueostomia em macronebulização";
  atualizarTexto();
};

document.getElementById("chest").onclick = () => {
  estado.torax = "Tórax simétrico com expansão bilateral";
  atualizarTexto();
};

document.getElementById("pupilae").addEventListener("click", () => {
  estado.pupilae = "Pupila esquerda 2mm, fotorreagente";
  atualizarTexto();
});

document.getElementById("pupilad").addEventListener("click", () => {
  estado.pupilad = "Pupila direita 2mm, fotorreagente";
  atualizarTexto();
});

document.getElementById("narinae").addEventListener("click", () => {
  estado.narinae = "Sonda nasoenteral em narina esquerda";
  atualizarTexto();
});
document.getElementById("narinad").addEventListener("click", () => {
  estado.narinad = "Sonda nasoenteral em narina direita";
  atualizarTexto();
});

document.getElementById("boca").addEventListener("click", () => {
  estado.boca = "Intubado em COT";
  atualizarTexto();
});

function atualizarTexto() {
  let texto = "";

  const partes = [
  "pupilae",
  "pupilad",
  "narinae",
  "narinad",
  "boca",
  "torax",
  "pescoco",
  "bracod",
  "bracoe",
  "pernad",
  "pernae"
];

  partes.forEach(parte => {
  if (estado[parte]) {
    texto += estado[parte] + ". ";
  }
});

  document.getElementById("output").value = texto;
}
