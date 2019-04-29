const fetch = require("node-fetch");

describe("Test a User GET (Content Type/Response Status)", () => {
  test("It should respond with a 200 status", async () => {
    // var  = 300;
    fetch("http://localhost:3001/users")
      .then(res => expect(res.status).toBe(200))
      .catch(err => expect(err.status).toBe(300));
  });
});

describe("Test a User GET (Content Type/Response Status)", () => {
  test("It should return an array", async () => {
    // var  = 300;
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(user => expect(Array.isArray(user)).toBe(true))
      .catch(err => expect(err.status).toBe(300));
  });
});

describe("Test a User GET (Content Type/Response Status)", () => {
  test("It should Content Type of application/json", async () => {
    fetch("http://localhost:3001/users")
      .then(response =>
        expect(
          ////SEE IF THIS ONE HAS JSON RESPONSE
          response.headers.get("content-type").indexOf("application/json") !==
            -1
        ).toBe(true)
      )
      .catch(err => expect(err.status).toBe(300));
  });
});

describe("Test a Specific User Info GET (Content/Response Status)", () => {
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
      .then(info => expect(info).toEqual(David_info))
      .catch(err => expect(err.status).toBe(300));
  });
});

describe("Test a Specific User Info GET (Content/Response Status)", () => {
  test("It should Content Type of application/json", async () => {
    fetch("http://localhost:3001/users/Steve")
      .then(response =>
        expect(
          ////SEE IF THIS ONE HAS JSON RESPONSE
          response.headers.get("content-type").indexOf("application/json") !==
            -1
        ).toBe(true)
      )
      .catch(err => expect(err.status).toBe(300));
  });
});

describe("Test a Featured_causes GET", () => {
  test("It should respond with a 200 status", async () => {
    fetch("http://localhost:3001/featured_causes")
      .then(res => expect(res.status).toBe(200))
      .catch(err => expect(err.status).toBe(200));
  });
});

describe("Test a Featured_causes GET", () => {
  test("It should Content Type of application/json", async () => {
    fetch("http://localhost:3001/featured_causes")
      .then(response =>
        expect(
          response.headers.get("content-type").indexOf("application/json") !==
            -1
        ).toBe(true)
      )
      .catch(err => expect(err.status).toBe(300));
  });
});

describe("Test a Specific Feature Info GET (Content/Response Status)", () => {
  test("It should return the Pangolin Cause's details", async () => {
    var Pangolin_info = [
      {
        id: 4,
        species: "Pangolin",
        image:
          "https://mscbcmnsep.files.wordpress.com/2018/02/blog-5.jpg?w=1190",
        user_who_added: "Steve"
      }
    ];
    fetch("http://localhost:3001/featured_causes/desired/Pangolin")
      .then(res => res.json())
      .then(info => expect(info).toEqual(Pangolin_info))
      .catch(err => expect(err.status).toBe(300));
  });
});

describe("Test a Specific Feature Info GET (Content/Response Status)", () => {
  test("Response should have Content Type of application/json", async () => {
    fetch("http://localhost:3001/featured_causes/desired/Turtle").then(
      response =>
        expect(
          response.headers.get("content-type").indexOf("application/json") !==
            -1 // THIS WILL BE FAlSE IF IT IS NOT APPLICATION/JSON
        ).toBe(true)
    );
  });
});

// Test For :
// Authorisation on POST
