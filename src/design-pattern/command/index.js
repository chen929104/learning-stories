/**
 * 命令模式
 * 命令模式可以把执行者和命令者皆偶，发起者不需要知道过程，只要方式和结果就可以了，对命令进行封装，易于扩展和修改
 */

// 接收者
class Receiver1 {
  doSomething() {
    console.log('Receiver1 doSomething...');
  }
}
class Receiver2 {
  doSomething() {
    console.log('Receiver2 doSomething...');
  }
}

// 命令者
class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {
    this.receiver.doSomething();
  }
}

// 发起者
class Invoker {
  constructor(command) {
    this.command = command;
  }

  execute() {
    this.command.execute();
  }
}

const receiver1 = new Receiver1();
const receiver2 = new Receiver2();

const command1 = new Command(receiver1);
const command2 = new Command(receiver2);

const invoker1 = new Invoker(command1);
const invoker2 = new Invoker(command2);

invoker1.execute();
invoker2.execute();
