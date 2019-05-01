# Table of Contents

1. Condervation_causes API

- 1.1. [Open Endpoints](##-Open-Endpoints)
- 1.2. [Endpoints that require Authentication](##Endpoints-that-require-Authentication)
- 1.3. [Example JSON formatted response:](##Example-JSON-formatted-response:)

# Conservation Causes API

# How to Run

## How to

once in root folder (`cd react-backend`)

`npm start`

will run server _and_ client side

# How to test

## How to run eslint

`npm run pretest`

## How to run tests

`npm run test`

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

The Conservation Causes API uses the data from the [IUCN red list of endangered species API](https://apiv3.iucnredlist.org/api/v3/docs). This represents itself as the _RED TEAR DROP SHAPES_ with the info in them about how endangered the species (from its scientific name) is.

![_VU_lnerable to extinction
](https://i.ibb.co/LtF6cJd/Screenshot-2019-05-01-at-17-49-01.png) = *Vu*lnerable to extinction
![_VU_lnerable to extinction
](https://i.ibb.co/w0gmybH/Screenshot-2019-05-01-at-17-48-54.png) = Endangered
![_VU_lnerable to extinction
](https://i.ibb.co/KWMtSF8/Screenshot-2019-05-01-at-17-48-50.png) = Least concern

Explanatory Video
![_VU_lnerable to extinction
](images/ezgif.com-video-to-gif.gif)

The server is stored in the files `app.js`, `featured_causes.js` and `users.js` and started using as above and runs on the local machine on `PORT 3001`.

`featured_causes.js` and `users.js` export to the express router which is imported by `app.js` which exports the express `app` and the `./bin/www` file imports the `app` and starts the express server.

User account information is saved if a user signs out and logs back in there 'Causes' are preserved. This is because all data is preserved in memory.

Eslint tests are performed by the command `'npm run pretest'` & Jest Mocking tests `'npm test'`.

- Eslint is run using the `'eslint:strongloop'` rules.

## Open Endpoints

Open endpoints require no Authentication.

- [Login]() : `POST /users/login`

  - `Success: HTTP 200`
  - `Failure: HTTP 401 (Authentication Failed)`
  - Handles Login POST Request. The body of the request contains the users username and password.
  - Response is the users credentials including:
    - id: |
      username: |
      causes: |
      profile_pic: |
      password: |
      secret: | (this becomes their token)

* [Get all users]() : `GET /users`

  - `Success: HTTP 200 (OK)`
  - `Failure: HTTP 404 (Not Found)`
  - Handles GET Request for a all users.
  - Returns all users.

* [Get User]() : `GET /users/:username`

  - `Success: HTTP 200 (OK)`
  - `Failure: HTTP 404 (Not Found)`
  - Handles GET Request for a specific user.
  - Returns users's details.

* [Post new cause linked to user]() : `POST /users/update_cause`

  - `Success: HTTP 200`
  - `Failure: HTTP 401 (error message: Incorrect authentication)`
  - Handles new user POST Request. The body of the request contains the username of the person who has just 'liked the cause'. It then appends this cause the the `causes` property of the correct user object using a `filter` method if there is no cause of its name in it already.

- [Get all causes]() : `GET /featured_causes`

  - `Success: HTTP 200 (OK)`
  - `Failure: HTTP 404 (Not Found)`
  - Handles GET Request for a all causes.
  - Returns all users.

- [Get Cause]() : `GET /featured_causes/desired/:featured_cause`

  - `Success: HTTP 200 (OK)`
  - `Failure: HTTP 404 (Not Found)`
  - Handles GET Request for a specific cause.
  - Returns cause's details.

all OK responses sent back with content-type `'application-json'`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the body of the request with the key `token`. A Token can be acquired from the post request above which as part of its resonse has `res.token`: `token`.

Endpoints for viewing and manipulating the users and causes by the Authenticated User (username/password: admin) has permissions to:

- [Post new cause]() : `POST /featured_causes`

  - `Success: HTTP 200 (OK)`
  - `Failure: HTTP 403 (Not Found)`
  - Handles POST request for making a new cause. Takes the causes id, species name, scientific name and the token of the person who sent it.
  - It then uses `unshift()` to add the new cause to the hard coded users

- [Post new user]() : `POST /new_user`

  - `Success: HTTP 200`
  - `Failure: HTTP 401 (Authentication Failed)`
  - Handles new user POST Request.
  - The body of the request contains the new users id, username and password. Also checks the authentication token of the User which is appended to the request.body with id `token`.
  - If this matches the admin token then it uses `unshift()` to add the new cause to the hard coded users.

all OK responses sent back with content-type `'application-json'`

(when server is restarted the users are set back to how they were before the user sent any post requests)

## Example JSON formatted response:

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
