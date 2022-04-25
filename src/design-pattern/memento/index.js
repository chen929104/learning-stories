/**
 * 备忘录模式
 * 在不不破坏封装的前提下，捕获一个对象内部状态，并在对象之外保存这个状态，这样以后就可以对这个对象恢复到保存之前的状态
 * 要保存状态，所以有一定的性能开销
 */

class Memento {
  constructor(content) {
    this.content = content;
  }

  getContext() {
    return this.content;
  }
}

class CareTaker {
  constructor() {
    this.list = [];
  }

  add(memento) {
    this.list.push(memento);
  }

  get(index) {
    return this.list[index];
  }
}

class Editor {
  constructor() {
    this.content = null;
  }

  setContent(content) {
    this.content = content;
  }

  getContext() {
    return this.content;
  }

  saveContentToMemento() {
    return new Memento(this.content);
  }

  getContentFromMemento(memento) {
    this.content = memento.getContext();
  }
}

const editor = new Editor();
const careTaker = new CareTaker();

editor.setContent('1111');
console.log(editor.getContext());
careTaker.add(editor.saveContentToMemento());
editor.setContent('2222');
console.log(editor.getContext());
editor.getContentFromMemento(careTaker.get(0));
console.log(editor.getContext());
