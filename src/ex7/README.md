## 7th exercise solution

This is the solution for the 7th exercise

## Suggested scoring schema

- [ ] **(25%)** Use the `items-entities-reducer` only for items while use the other reducer for view-related state
- [ ] **(30%)** Handle all server requests in the actions' creators
- [ ] **(10%)** Handle failures and loading
- [ ] **(15%)** Add a search input in the correct component hierarchy and use a selector to perform the search
- [ ] **(15%)** Handle status filter in a dedicated service and filter the items using a selector
- [ ] **(5%)** Add a logger middleware

### Bonus
- [ ] **(3%)** \* Debounce search
- [ ] **(5%)** \* Implement an option to restore the last item that was deleted
- [ ] **(5%)** ** Make your application accessible, i.e. keyboard navigation (ctrl+Enter create new, tab navigation)

## For checkers: 
- use the following to reset your db between exercises
  - ```docker stop tododb```
  - ```docker rm tododb```
- Run the server with the db:
  - ```docker pull mysql/mysql-server```
  - ```docker run -p 3306:3306 --name tododb -e MYSQL_ROOT_PASSWORD=password -e MYSQL_ROOT_HOST=% -e MYSQL_DATABASE=todo_db -d mysql/mysql-server```
  - If you have never created the db, run the migrations: `npx sequelize-cli db:migrate`
  - Inside the server directory run `npm i && npm run start` 
- Run the client:
  - Inside the client directory run `npm i && npm run start`
