class DecoratorBase {
  constructor(comp) {
    this.wrap = comp;
    this.reporterHTML = null; // Initialize reporterHTML as needed
  }

  executar() {
    
  }
}

// Usage:
const component = new ComponenteConcreto(); // Create an instance of ComponenteConcreto
const decorator = new DecoratorBase(component); // Create an instance of DecoratorBase with the ComponenteConcreto instance
decorator.executar(); // Call the executar method on the decorator
