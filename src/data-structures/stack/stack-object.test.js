import StackObject from './stack-object';

describe('Stack', () => {
  it('should create empty stack', () => {
    const stack = new StackObject();
    expect(stack).not.toBeUndefined();
  });

  it('should stack data to stack', () => {
    const stack = new StackObject();

    stack.push(1);
    stack.push(2);

    expect(stack.toString()).toBe('1,2');
  });

  it('should peek data from stack', () => {
    const stack = new StackObject();

    expect(stack.peek()).toBeUndefined();

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
    expect(stack.peek()).toBe(2);
  });

  it('should check if stack is empty', () => {
    const stack = new StackObject();

    expect(stack.isEmpty()).toBe(true);

    stack.push(1);

    expect(stack.isEmpty()).toBe(false);
  });

  it('should pop data from stack', () => {
    const stack = new StackObject();

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should be possible to push/pop objects', () => {
    const stack = new StackObject();

    stack.push({ value: 'test1', key: 'key1' });
    stack.push({ value: 'test2', key: 'key2' });

    expect(stack.pop().value).toBe('test2');
    expect(stack.pop().value).toBe('test1');
  });
  it('should get stack size', () => {
    const stack = new StackObject();

    stack.push(1);
    stack.push(2);

    expect(stack.size()).toBe(2);
  });
  it('should get stack clean', () => {
    const stack = new StackObject();

    stack.push(1);
    stack.push(2);

    stack.clear();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });
});
