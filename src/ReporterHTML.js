import AbstractFormater from './AbstractFormater.js';
import DecoratorHtmlP from './Decorator/DecoratorHtmlP.js';
import DecoratorHtmlDiv from './Decorator/DecoratorHtmlDiv.js';

export default class ReporterHTML extends AbstractFormater {

  constructor() {
    super();
  }

  output (cities) {

   

    //Código que faz a lista na versão com divs
    const decoratorDiv = new DecoratorHtmlDiv(cities); //Inicializa o  decorator versão div
    decoratorDiv.executar(); //Executa o básico do decorator
    decoratorDiv.extra(); //Executa o o especifico do decorator
    let htmlDiv = decoratorDiv.end(); // executa a finalização 

     //Código comentado que faz a lista na versão com paragrafos
    //const decoratorP = new DecoratorHtmlP(component, cities); /Inicializa o  decorator versão div
    //decoratorP.executar(); //Executa o básico do decorator
    //decoratorP.extra(); //Executa o o especifico do decorator
    //let htmlP = decoratorP.end(); //Executa o o especifico do decoratorexecuta a finalização e retorna

      return htmlDiv;
  }

}
