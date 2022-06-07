class PokemonClient {
    constructor() {
        this.API_URL = 'https://pokeapi.co/api/v2/pokemon/'
    }

    async getPokemon(id) {
        try {
            const response = await fetch(`${this.API_URL}${id}`)
            const pokemon = await response.json()

            return pokemon
        } catch (error) {
            console.error(error)
            throw new Error("Failed to fetch pokemon")
        }
    }

    async getManyPokemon(ids) {
        try {
            // `fetch` returns a Promise
            // therefore using `map` on each of the IDs will return an *array* of promises
            const promises = ids.map(id => fetch(`${this.API_URL}${id}`))
            const responses = await Promise.all(promises)

            // this is similar to the above process, but in one line. the goal of code is *not* necessarily to be shorter, 
            // but if it's still readable - then why not be elegant?
            const pokemons = await Promise.all(responses.map(r => r.json()))

            return pokemons
        } catch (error) {
            console.error(error)
            throw new Error("Failed to fetch pokemon")
        }
    }
}