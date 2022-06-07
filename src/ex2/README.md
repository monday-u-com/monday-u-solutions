## Second exercise solution

This is the solution for the second exercise

## Suggested scoring schema

- [ ] **(25%)** Refactor code to classes (itemManager, pokemonClient, and Main)
- [ ] **(20%)** Clean code with single responsibility/reusable functions
- [ ] **(15%)** Use list of items instead of 'on the fly' DOM manipulation (for add, render, and remove)
- [ ] **(15%)** Use PokemonClient to get data from API
- [ ] **(15%)** Use PokemonClient and simple text parsing (comma separated) to add multiple pokemon todos using `Promise.all`
- [ ] **(10%)** Handle errors accordingly (in API requests & rendering)

Bonus

- [ ] Add a **delete all** button that clears the array and re-renders the list
- [ ] Validate that the user isn't adding the same pokemon todo more than once
- [ ] Get more nested data from the API ("Catch bulbasaur the leaf type pokemon") - use only the first type
- [ ] Iterate over all types and show "Catch bulbasaur the leaf/poison type pokemon"
- [ ] Modify the API request to allow using the pokemon's name instead of ID _if_ there is a pokemon name in the user's input (from a closed list of preset pokemon)
