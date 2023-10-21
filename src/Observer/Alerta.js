import Observer from "./FileObserver.js";

//Função de alerta única que recebe como parâmetro o tipo de alteração
export function alteracao(data) {
    console.log("Alerta! A seguinte alteração ocorreu: " + data);
}
Observer.subscribe(alteracao);

