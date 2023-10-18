class DecoratorHtmlDiv extends DecoratorBase {
  constructor(comp) {
    super(comp); // Call the constructor of the parent class
  }

  executar() {
    // Implementation of the executar method
  }

  extra() {
    // Implementation of the extra method
  }
}

// Usage:
const component = new ComponenteConcreto(); // Create an instance of ComponenteConcreto
const decorator = new DecoratorHtmlDiv(component); // Create an instance of DecoratorHtmlDiv with the ComponenteConcreto instance
decorator.executar(); // Call the executar method on the decorator
decorator.extra(); // Call the extra method on the decorator
