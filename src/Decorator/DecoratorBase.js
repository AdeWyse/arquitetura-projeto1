export default class DecoratorBase {
  constructor(comp, cities) {
    this.wrap = comp;
    this.htmlRetornar = ``;
    this.cities = cities;
  }

  executar() {
    this.htmlRetornar = `
    <!DOCTYPE HTML>
    <html>
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>Relatório de Nomes de Cidades</title>
      </head>
      <body>
        <h1>Relatório de Nomes de Cidades</h1>
        <ul>
    `;
  }

  end(){
    this.htmlRetornar += `
          </ul>
        </body>
      </html>`;
  }
}
