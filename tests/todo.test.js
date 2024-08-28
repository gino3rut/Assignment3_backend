const registerTodo = require('../src/todoController');
const data = registerTodo("Title 1","Testing todo 1");

test('Register User 1', () => {
    expect(data.title).toBe("Title 1");
    expect(data.desc).toBe("Testing todo 1");
});