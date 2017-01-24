const Person = require('../lib/person');

describe('Person', () => {
  it('should report name', () => {
    expect(new Person('John').name).toEqual('John');
  });
});
