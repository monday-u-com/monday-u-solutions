class Main {
    constructor() {
        // we only need one item manager, so we create the instance in the constructor
        // what would happen if we created a new itemManager each time we added/removed an item?
        this.itemManager = new ItemManager()
    }

    init = () => {
        const addItemButton = document.getElementById("list-item-submit");
        addItemButton.addEventListener("click", this.handleItem);
    }

    handleItem = async () => {
        const input = document.getElementById("list-item-input");
        const inputValue = input.value;

        if (this._isNumber(inputValue)) {
            await this.itemManager.fetchAndAddPokemon(inputValue);
            return this.renderItems();
        }

        if (this._isList(inputValue)) {
            await this.itemManager.fetchAndAddManyPokemon(inputValue);
            return this.renderItems();
        }

        this.itemManager.addItem(inputValue)
        this.renderItems()
    }

    deleteItem = item => {
        this.itemManager.deleteItem(item);
        this.renderItems();
    }

    renderItems = () => {
        const list = document.getElementById("list");
        list.innerHTML = ""; // what happens when you comment out this line - why?

        this.itemManager.getItems().forEach(item => {
            const listItem = document.createElement("li");
            listItem.classList.add('list-item');
            listItem.innerHTML = item;

            const listItemDeleteButton = this._createDeleteButton(item);
            listItem.appendChild(listItemDeleteButton);
            list.appendChild(listItem);
        })
    }

    // Methods that begin with _ are "private methods" 
    // By convention, only other methods within this class can invoke these
    _createDeleteButton = item => {
        const button = document.createElement("img");
        button.src = "images/delete_icon.svg";
        button.classList.add('list-item-delete-button');
        button.addEventListener("click", _ => this.deleteItem(item));

        return button
    }

    _isNumber = value => !isNaN(Number(value));
    _isList = value => value.split(",").every(this._isNumber); // this looks like a mouthful - but take it step by step, it's pretty cool
}

const main = new Main();

document.addEventListener("DOMContentLoaded", function () {
    main.init();
});