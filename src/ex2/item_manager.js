class ItemManager {
    constructor() {
        // we only need one pokemon client, so we initialize it in the constructor once for any method to use
        this.pokemonClient = new PokemonClient();

        // since multiple methods need to access the same `items` data, we initialize this array in the constructor
        this.items = [];
    }

    getItems = () => this.items

    addItem = item => {
        this.items.push(item);
    }

    addPokemonItem = pokemon => {
        this.addItem(`Catch ${pokemon.name}`);
    }

    fetchAndAddPokemon = async pokemonId => {
        try {
            const pokemon = await this.pokemonClient.getPokemon(pokemonId);
            this.addPokemonItem(pokemon);
        } catch (error) {
            this.addItem(`Pokemon with ID ${pokemonId} was not found`);
        }
    }

    fetchAndAddManyPokemon = async inputValue => {
        try {
            const pokemons = await this.pokemonClient.getManyPokemon(inputValue.replaceAll(" ", "").split(","));
            pokemons.forEach(this.addPokemonItem); // this code is quite inefficient. Can you see why?
        } catch (error) {
            this.addItem(`Failed to fetch pokemon with this input: ${inputValue}`)
        }
    }

    deleteItem = item => {
        this.items = this.items.filter(i => i !== item);
    }
}