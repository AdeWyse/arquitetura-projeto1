import fs from 'node:fs';
import Observer from './Observer/FileObserver.js';
import './Observer/Alerta.js';

export default class CitiesReporter {
  constructor ({ formaterStrategy }) {
    this._formaterStrategy = formaterStrategy;
  }
  _read (filename) {
    this._filename = filename;
    this._cities_json = fs.readFileSync(filename);
    Observer.notify("- Leitura -"); // Notificando alerta de leitura

  }
  //Salva o arquivo alterado com uma cidade adicionada no caminho de _filename
  _save(){
    fs.writeFileSync(this._filename, JSON.stringify(this._cities, null, 2), 'utf8');
    Observer.notify("- Salvamento -"); //Notificando alerta de salvamento
  }
  
  _parseJSON () {
    this._cities = JSON.parse(this._cities_json);
  }

  report (filename) {
    this._read(filename);
    this._parseJSON();
    return this._formaterStrategy.output(this._cities);
  }


  //Adiciona uma nova cidade em cidades-2.json, retornar true se a cidade for salva ou false caso um erro ocorra
  adicionarCidade() {
    let id = parseInt(this._cities[this._cities.length -1 ].ID) + 1;

    const novaCidade = {
      "ID": id.toString(),
      "NOME": "Cidade Inventada Nº" + id,
      "ESTADO": "Estado Inventado"
    };
    try {
      if (this._cities.some(cidade => cidade.ID === novaCidade.ID)) { // Verificando se o ID passado já existe
        return false;
      }
  
      this._cities.push(novaCidade);

      this._save(); //Salvando arquivo
      return true; 
    } catch (error) {
      
      console.log(error);
      return false;
    }
    
  }
}





