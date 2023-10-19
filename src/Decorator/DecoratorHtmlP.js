import DecoratorBase from "./DecoratorBase.js";

export default class DecoratorHtmlP extends DecoratorBase {
  constructor(comp, cities) {
    super(comp, cities); // Call the constructor of the parent class
  }

  executar() {
    super.executar();
  }

  extra() {
    for (let i = 0; i < this.cities.length; i++) {
      this.htmlRetornar += `     <li><p>${this.cities[i]['Nome']}</p></li>\n`;
    }
  }

  end(){
    super.end();
     return this.htmlRetornar;
   }
}

