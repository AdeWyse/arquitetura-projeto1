export default class Observer {
    static observadores = [];

    //Aqui cada observador é uma função de Alerta.js
    
    static subscribe(observador) { //Inscreve um observador
      Observer.observadores.push(observador);
    }
  
    static unsubscribe(observador) { //Retira a função da lista de observadores
      const index = Observer.observadores.indexOf(observador);
      if (index !== -1) {
        Observer.observadores.splice(index, 1);
      }
    }
  
    static notify(data) {  //Notifica todas as funções inscritas
      Observer.observadores.forEach(observador => {
        observador(data);
      });
    }
  }
  