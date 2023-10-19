import DecoratorBase from "./DecoratorBase.js";

export default class DecoratorHtmlDiv extends DecoratorBase {
  constructor(cities) {
    super(cities);//Construtor do pai
  }

  //Executa o básico do decorator
  executar() {
    super.executar();//Executar do pai
    
  }
//Executa o especifico do decorator
  extra() {
    for (let i = 0; i < this.cities.length; i++) {
      this.htmlRetornar += `     <li><div>${this.cities[i]['Nome']}</div></li>\n`;
    }

  }
// executa a finalização e retorna
  end(){
   super.end(); //End do pai
    return this.htmlRetornar;
  }
}

