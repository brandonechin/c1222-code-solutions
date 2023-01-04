function ExampleConstructor() {

}
console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

var constructor = new ExampleConstructor();
console.log(constructor);

var instanceOfConstructor = constructor instanceof ExampleConstructor;
console.log(instanceOfConstructor);
