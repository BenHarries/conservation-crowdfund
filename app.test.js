const fetch = require("node-fetch");

describe("Test a User GET", () => {
  test("It should respond with a 200 status", async () => {
    // var  = 300;
    fetch("http://localhost:3001/users") // console.log("!!!!!!!!!!!!!!!!!", response);
      // .then(res => console.log(res))
      .then(res => expect(res.status).toBe(200))
      // .then(res => expect(Array.isArray(res).toBe(true)))
      .catch(err => expect(err.status).toBe(200));
  });
});

describe("Test a User GET", () => {
  test("It should return an array", async () => {
    // var  = 300;
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      // .then(user => console.log("resss", user, Array.isArray(user)))
      .then(user => expect(Array.isArray(user)).toBe(true));
    // .catch(err => expect(err.status).toBe(300));
  });
});

describe("Test a Featured_causes GET", () => {
  test("It should Content Type of application/json", async () => {
    // var  = 300;
    fetch("http://localhost:3001/users")
      // .then(user => console.log("resss", user, Array.isArray(user)))
      .then(response =>
        expect(
          ////SEE IF THIS ONE HAS JSON RESPONSE
          response.headers.get("content-type").indexOf("application/json") !==
            -1
        ).toBe(true)
      );
    // .catch(err => expect(err.status).toBe(300));
  });
});

describe("Test a User Info GET", () => {
  test("It should return David Attenboroug's details", async () => {
    var David_info = [
      {
        id: 1,
        username: "David",
        causes: ["Turtle"],
        profile_pic:
          "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/16/1492536273-david-attenborough.jpg?crop=0.694xw:1.00xh;0.160xw,0&resize=480:*",
        secret: "ksdjncaksjbciadcn"
      }
    ];
    fetch("http://localhost:3001/users/David")
      .then(res => res.json())
      // .then(user => console.log("resss", user, Array.isArray(user)))
      .then(info => expect(info).toEqual(David_info));
    // .catch(err => expect(err.status).toBe(300));
  });
});

describe("Test a Featured_causes GET", () => {
  test("It should respond with a 200 status", async () => {
    // var  = 300;
    fetch("http://localhost:3001/featured_causes") // console.log("!!!!!!!!!!!!!!!!!", response);
      .then(res => expect(res.status).toBe(200))
      .catch(err => expect(err.status).toBe(200));
  });
});

describe("Test a Featured_causes GET", () => {
  test("It should Content Type of application/json", async () => {
    // var  = 300;
    fetch("http://localhost:3001/featured_causes")
      // .then(user => console.log("resss", user, Array.isArray(user)))
      .then(response =>
        expect(
          response.headers.get("content-type").indexOf("application/json") !==
            -1
        ).toBe(true)
      );
    // .catch(err => expect(err.status).toBe(300));
  });
});

// Test For :
// Authorisation

// describe("Test a 200", () => {
//   test("It should respond with a 200 status", async () => {
//     // var  = 300;
//     fetch("http://localhost:3001/users") // console.log("!!!!!!!!!!!!!!!!!", response);
//       .then(res => expect(res.status).toBe(200))
//       .catch(err => expect(err.status).toBe(200));
//   });
// });
