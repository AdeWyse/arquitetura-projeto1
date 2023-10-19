import AbstractFormater from './AbstractFormater.js';
import DecoratorHtmlP from './Decorator/DecoratorHtmlP.js';
import DecoratorHtmlDiv from './Decorator/DecoratorHtmlDiv.js';
import ComponenteConcreto from './Decorator/ComponenteConcreto.js';

export default class ReporterHTML extends AbstractFormater {

  constructor() {
    super();
  }

  output (cities) {
    const component = new ComponenteConcreto(); 
    
    const decoratorDiv = new DecoratorHtmlDiv(component, cities); 
      
    //const decoratorP = new DecoratorHtmlP(component, cities); 
    //decoratorP.executar(); 
    //decoratorP.extra();
    //let htmlP = decoratorP.end();

    decoratorDiv.executar(); 
    decoratorDiv.extra();
    let htmlDiv = decoratorDiv.end();

      return htmlDiv;
  }

}
