let cor;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  cor = color(random(0, 250), random(0, 250), random(0, 250));
  background("white");

  fill(cor);

  textSize(64);

  textAlign(CENTER, CENTER);

  let maximo = width;

  let minimo = 0;

  let palavra = "Robótica";

  let quantidade = map(mouseX, 0, width, 1, palavra.length);

  let parcial = palavra.substring(0, quantidade);

  text(parcial, 200, 200);
}
