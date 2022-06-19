## Fourth exercise solution

This is the solution for the fourth exercise

## Suggested scoring schema

- [ ] **(30%)** Create your express backend (include separate `dist` and `server` folders)
- [ ] **(20%)** Your `server.js` file should have all the express boilerplate and host your `dist` directory to any client that requests it (hint: you'll need to `.use` the `express.static` method)
- [ ] **(20%)** Create separate endpoints for (1) fetching all the todo items, (2) creating a new one, and (3) deleting an existing one (hint: don't forget `bodyParser`)
- [ ] **(15%)** Move the pokemon fetching code to the backend - use `axios` instead of `fetch` for your requests
- [ ] **(15%)** On app load (i.e. when a user enters the page) it should fetch all the todo items and render them

Bonus

- [ ] Create a [middleware](https://expressjs.com/en/guide/using-middleware.html) that makes a log each time a user accesses any of the routes (you can just do a `console.log`)
- [ ] Handle server errors elegantly. Specifically, if anything goes wrong the user should see an error message (ideally, not an alert) with an explanation of what went wrong instead of crashing the page
- [ ] Add a loder/spinner to the page that indicates the client is waiting for an async operation (e.g. a call to the server) to finish
- [ ] Add simple caching to your server. If a user requests for the same pokemon ID three times in the same minute, for example, it should only make a request to the Pokemon API once. You can use a simple in-memory data structure for your cache
  - This is the really impressive one
