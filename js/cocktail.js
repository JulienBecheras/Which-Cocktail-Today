class cocktail{
    /**
     * @type {string}
     */
    _nom;

    /**
     * @type {int}
     */
    _id;
    /**
     * @type {[string]|null}
     */
    _ingredients;
    /**
     * @type {string}
     */
    _image;
    /**
     * @type {string|null}
     */
    _instruction;
    /**
     * @type {[string]|null}
     */
    _quantite;
    /**
     * @type {string|null}
     */
    _categorie
    /**
     * @type {string|null}
     */
    _alcoolic;

    constructor(nom, id, image){
        this._id = id;
        this._nom = nom;
        this._image = image;
    }

// GETTER
    getNom(){
        return this._nom;
    }

    getId(){
        return this._id;
    }

    getImage(){
        return this._image;
    }

    getIngredients(){
        return this._ingredients;
    }

    getQuantite(){
        return this._quantite;
    }

    getCategorie(){
        return this._categorie;
    }

    getInstruction(){
        return this._instruction;
    }

    getAlcoolic(){
        return this._alcoolic;
    }


}