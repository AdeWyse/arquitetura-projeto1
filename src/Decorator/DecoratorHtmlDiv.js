import DecoratorBase from "./DecoratorBase.js";

export default class DecoratorHtmlDiv extends DecoratorBase {
  constructor(comp, cities) {
    super(comp, cities); // Call the constructor of the parent class
  }

  executar() {
    super.executar();
    this.extra();
    
  }

  extra() {
    for (let i = 0; i < this.cities.length; i++) {
      this.htmlRetornar += `     <li><div>${this.cities[i]['Nome']}</div></li>\n`;
    }

  }

  end(){
   super.end();
    return this.htmlRetornar;
  }
}

