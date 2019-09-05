// declaring classes in js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Something {
  constructor(name) {
    this.name = name;
    this.Myname= Myname;
  }

  hello() {
    console.log(this.name)
  }
}

const s = new Something('tim');
s.hello();

// for practice

// Create a subclass

// add a property after the object has been instantiated

// add a static function
Subclass.myfuncttion();

Subclass.prototype.test =4;
