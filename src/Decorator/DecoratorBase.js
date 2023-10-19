  //Componente e ComponenteConcreto foi exluido devido a simplicidade do projeto comforme discutido com o professor.
export default class DecoratorBase {
  constructor(cities) {
    this.htmlRetornar = ``;//  string para estrutura html
    this.cities = cities;// array de cidades para listar
  }
  //Define o inicio da estrutura html
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
  //Define o fim da estrutura html
  end(){
    this.htmlRetornar += `
          </ul>
        </body>
      </html>`;
  }
}
