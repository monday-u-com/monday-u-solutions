import file from "../data_access/file.js";
import utils from "../utils/utils.js";
import pokemonClient from "../api/pokemon_client.js";

class TodoManager {
  getTodos = () => file.getTodos();

  addTodo = async (item) => {
    if (utils.isNumber(item)) {
      await this._fetchAndAddPokemon(item);
    } else if (utils.isList(item)) {
      await this._fetchAndAddManyPokemon(item);
    } else {
      this._addTodo(item);
    }
  };

  deleteTodo = (index) => {
    if (isNaN(index)) {
      throw "Parameter is not a number";
    }
    if (index < 0) {
      throw "Negative number is not allowed";
    }
    file.deleteTodo(index);
  };

  _addTodo = (item) => {
    file.addTodo(item);
  };

  _addPokemonTodo = (pokemon) => {
    this._addTodo(`Catch ${pokemon.name}`);
  };

  _fetchAndAddPokemon = async (pokemonId) => {
    try {
      const pokemon = await pokemonClient.getPokemon(pokemonId);
      this._addPokemonTodo(pokemon);
    } catch (error) {
      console.error(`Pokemon with ID ${pokemonId} was not found`, error);
    }
  };

  _fetchAndAddManyPokemon = async (inputValue) => {
    try {
      const pokemons = await pokemonClient.getManyPokemon(
        inputValue.replaceAll(" ", "").split(",")
      );
      pokemons.forEach(this._addPokemonTodo);
    } catch (error) {
      console.error(
        `Failed to fetch pokemon with this input: ${inputValue}`,
        error
      );
    }
  };
}

export default new TodoManager();
