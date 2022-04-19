'use strict';

class first {
  constructor(name, tech, notech) {
    this.name = name;
    this.tech = tech;
    this.notech = notech;
  }
  hello(item) {
    console.log(item);
  }
  method() {
    console.log(`Приветствую, меня зовут ${this.name} я изучаю JS. Часто путаюсь с синтаксисом,так как много информации поступает.
По мере возможностей стараюсь из всех сил!
Приобретенные навыки на данный момент : ${this.tech} Не до конца понимание: ${this.notech}`);
  }
}

const feynmanMethod = new first('Дмитрий', 'умение работать с циклами, массивами, объектами. Понимание работы с DOM деревом, сравнение переменных, навешивание событий; ', 'this и всплытия, присваивания переменных после переборов, синтаксис некоторых моментов(путаюсь с вызовами и методами(что за чем следует))');

class second extends first {
  constructor(name, tech, notech) {
    super(name, tech, notech);
  }
  hello() {
    first.prototype.hello('Привет, я метод родителя');
    console.log('А я наследуемый элемент');
  }
}

const whatILearned = new second();

whatILearned.hello();
feynmanMethod.method();






