# Conservation Causes

# Table of Contents

1. Condervation_causes API
   Written in react.js and node.js

- 0.[Website Documentattion (how to use website)](#How-to-Use-App)

- 1.0. [API documentation]()
- 1.1. [Open Endpoints](##-Open-Endpoints)
- 1.2. [Endpoints that require Authentication](##Endpoints-that-require-Authentication)
- 1.3. [Example JSON formatted response:](##Example-JSON-formatted-response:)
- [Optional Extenstions 1: Cloud Deployment](###-Extension-1)
- [Optional Extenstions 2: 3rd party API integration](###-Extension-2)

# Conservation Causes API

# How to Run

Once in root folder (`cd react-backend`)

`npm update` (in case of any differences in npm version)

`npm install` (This does a post intall on react subfolder dependencies so may take slightly long)

`npm start`

(This will run server _and_ client side (con-web) on port 3001 and 3000 respectively)

To end up with this

- Explanatory Video
  ![_VU_lnerable to extinction
](images/ezgif.com-video-to-gif.gif)

(IF ON WINDOWS! -> I have been able to run on someone elses mac but have had difficulty on a windows computer - if npm start fails on windows use the heroku link below to get a feel for the app)

# How to test

## How to run eslint

`npm run pretest`

## How to run tests

`npm run test`

### Extension 1

Also running on _Heroku_ on https://ancient-stream-57707.herokuapp.com/ (Heroku dissalowed me to add any more changes as I had exceeded my free trial - so there is a few bugs still left in however most functionality remains, just click close on the errors if they pop up)

Heroku demo
![_VU_lnerable to extinction
](images/demo_heroku.gif)

# How to Use App

## Entities

There are two entities:

- Users
- Causes

## Pages

After logging in with either the user or admin credentials there are 3 pages available from the navbar are:

- 'Featured causes'
  - Lists all causes
  - Click on causes on the 'Like this..' button to add to your causes page
- 'My Causes'
  - This is where you can view which causes you have liked
- 'Admin'
  - This is an authenticated page for admins only that allows you to add causes/user and get specific info on causes/users

### Extension 2

The Conservation Causes API uses the data from the [IUCN red list of endangered species API](https://apiv3.iucnredlist.org/api/v3/docs). This represents itself as the _RED TEAR DROP SHAPES_ with the info in them about how endangered the species (from its scientific name) is.

![_VU_lnerable to extinction
](https://i.ibb.co/LtF6cJd/Screenshot-2019-05-01-at-17-49-01.png) = *Vu*lnerable to extinction
![_VU_lnerable to extinction
](https://i.ibb.co/w0gmybH/Screenshot-2019-05-01-at-17-48-54.png) = Endangered
![_VU_lnerable to extinction
](https://i.ibb.co/KWMtSF8/Screenshot-2019-05-01-at-17-48-50.png) = Least concern

The server is stored in the files `app.js`, `featured_causes.js` and `users.js` and started using as above and runs on the local machine on `PORT 3001`.

`featured_causes.js` and `users.js` export to the express router which is imported by `app.js` which exports the express `app` and the `./bin/www` file imports the `app` and starts the express server.

User account information is saved if a user signs out and logs back in there 'Causes' are preserved. This is because all data is preserved in memory.

Eslint tests are performed by the command `'npm run pretest'` & Jest Mocking tests `'npm test'`.

- Eslint is run using the `'eslint:strongloop'` rules.

## Open Endpoints

Open endpoints require no Authentication.

## Entity 1: users

- [Get all users]() : `GET /users`

  - `Success: HTTP 200 (OK)`
  - `Failure: HTTP 404 (Not Found)`
  - Parameters: N/A
  - Handles GET Request for a all users.
  - Returns all users.
  - Example json resonse

```json
[
  {
    "id": 1,
    "username": "David",
    "causes": ["Turtle"],
    "profile_pic": "http://www.jakeblanchard.co.uk/Images/Archive/attenborough.jpg",
    "password": "user",
    "secret": "ksdjncaksjbciadcn"
  },
  {
    "id": 2,
    "username": "Steve",
    "causes": ["Giant Panda"],
    "profile_pic": "https://semantic-ui.com/images/avatar/large/joe.jpg",
    "secret": "ksdjncaksjbciadcn",
    "password": "user"
  }
  //and so on...
]
```

- [Get User]() : `GET /users/:username`

  - `Success: HTTP 200 (OK)`
  - `Failure: HTTP 404 (Not Found)`
  - Parameters: The parameter of the username of the certain user is in the url of the get request.
  - Handles GET Request for a specific user.
  - Returns users's details.
  - Example json response with content-type `'application-json'` using res.json():

```json
[
  {
    "id": 2,
    "username": "Steve",
    "causes": ["Giant Panda"],
    "profile_pic": "https://semantic-ui.com/images/avatar/large/joe.jpg",
    "secret": "ksdjncaksjbciadcn",
    "password": "user"
  }
  //and so on...
]
```

- [Post new cause linked to user]() : `POST /users/update_cause`

  - `Success: HTTP 200`
  - `Failure: HTTP 401 (error message: Incorrect authentication)`
  - Parameters: The body of the request contains the username of the person who has just 'liked the cause' and the cause being updated.
  - Handles new user POST Request. It then appends this cause the the `causes` property of the correct user object using a `filter` method if there is no cause of its name in it already.
  - No resonse body only status.

## Entity 2: Causes

- [Get all causes]() : `GET /featured_causes`

  - `Success: HTTP 200 (OK)`
  - `Failure: HTTP 404 (Not Found)`
  - Parameters: N/A
  - Handles GET Request for a all causes.
  - Returns all users.
  - Example JSON formatted response with content-type `'application-json'` using res.json():

```json
[
  {
    "id": 6,
    "species": "Asian Tiger",
    "image": "https://previews.123rf.com/images/ewastudio/ewastudio1803/ewastudio180300105/98369124-tiger-in-forest-tiger-portrait.jpg",
    "user_who_added": "Steve",
    "scientific_name": "Panthera tigris"
  } //and so on ...
]
```

- [Get Cause]() : `GET /featured_causes/desired/:featured_cause`

  - `Success: HTTP 200 (OK)`
  - `Failure: HTTP 404 (Not Found)`
  - Parameters: The parameter of the name of the cause is in the url of the get request.
  - Handles GET Request for a specific cause.
  - Returns cause's details.
  - ### Example JSON formatted response with content-type `'application-json'` using res.json():

```json
[
  {
    "id": 6,
    "species": "Asian Tiger",
    "image": "https://previews.123rf.com/images/ewastudio/ewastudio1803/ewastudio180300105/98369124-tiger-in-forest-tiger-portrait.jpg",
    "user_who_added": "Steve",
    "scientific_name": "Panthera tigris"
  }
]
```

all OK responses sent back with content-type `'application-json'`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the body of the request with the key `token`. A Token can be acquired from the post request above which as part of its resonse has `res.token`: `token`.

Endpoints for viewing and manipulating the users and causes by the Authenticated User (username/password: admin) has permissions to:

- [Login]() : `POST /users/login`

  - `Success: HTTP 200`
  - `Failure: HTTP 401 (Authentication Failed)`
  - Parameters: The body of the request contains the users username and password.
  - Handles Login POST Request.
  - Checks the username and password against locally stored users.

  - ### Example JSON formatted response with content-type `'application-json'` using res.json():

```json
[
  {
    "id": 2,
    "username": "Steve",
    "causes": ["Giant Panda"],
    "profile_pic": "https://semantic-ui.com/images/avatar/large/joe.jpg",
    "secret": "ksdjncaksjbciadcn",
    "password": "user"
  }
]
```

Once logged in and a token is aquired:

- [Post new user]() : `POST users/new_user`

  - `Success: HTTP 200`
  - `Failure: HTTP 403 (Forbidden error)`
  - Parameters: The body of the request contains the new users id, username and password.
  - Handles new user POST Request.
  - Also checks the authentication token of the User which is appended to the request.body with id `token`.
  - If this matches the admin token then it uses `unshift()` to add the new user to the hard coded users.
  - only a response status given back
  - Example JSON formatted response with content-type `'application-json'` using res.json():

```json
[
  {
    "id": 6,
    "species": "Asian Tiger",
    "image": "https://previews.123rf.com/images/ewastudio/ewastudio1803/ewastudio180300105/98369124-tiger-in-forest-tiger-portrait.jpg",
    "user_who_added": "Steve",
    "scientific_name": "Panthera tigris"
  }
]
```

- [Post new cause]() : `POST /featured_causes`

  - `Success: HTTP 200 (OK)`
  - `Failure: HTTP 403 (Forbidden error)`
  - Parameters: Takes the causes id, species name, scientific name and the username & token of the person who sent it.
  - Handles POST request for making a new cause.
  - Also checks the authentication token of the User which is appended to the request.body with id `token` and if so appends their username to the cause.
  - It then uses `unshift()` to add the new cause to the hard coded `featured_causes`
  - No response given just the res.status

(When server is restarted the user and causes credentials are set back to how they were before the user sent any post requests)
