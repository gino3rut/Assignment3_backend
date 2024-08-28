const registerUser = require('../src/userController');
const data = registerUser("test-user1@aaa.com","12345");

test('Register User 1', () => {
    
    expect(data.email).toBe("test-user1@aaa.com");
    expect(data.password).toBe("12345");
});