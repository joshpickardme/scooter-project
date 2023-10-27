const User = require('../src/User');

const user = new User("Joe Bloggs", "test123", 21);

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    expect(typeof user.user).toBe("string");
  })
  // test password
  test("password should be a string", () => {
    expect(typeof user.password).toBe("string")
  })

  // test age
  test("age should be a number", () => {
    expect(typeof user.age).toBe("number")
  })
})


// test login
describe("User method tests", () => {
  test("user can login if pasword is correct", () => {
    user.login("test123")
    expect(user.checkLoggedIn()).toBe(true)
  })
  test("user cannot login if pasword is incorrect", () => {
    expect(() => {
      user.login("wrong-password")
    }).toThrow("Incorrect Password Entered")
  })
  test("logout works", () => {
    user.login("test123")
    user.logout()
    expect(user.checkLoggedIn()).toBe(false)
  })
})

