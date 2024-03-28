async function rechercheCocktailNom(motClef) {
    try {
        // Utilisation de AllOrigins pour contourner les problèmes de CORS
        const response = await fetch(`https://api.allorigins.win/get?url=
        ${encodeURIComponent('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + motClef)}`);
        const cocktails = await response.json();
        // Les données sont stockées dans cocktails.contents
        return JSON.parse(cocktails.contents); // Retourne les données de la recherche
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la recherche : ', error);
        throw error; // Lance une exception pour gérer l'erreur à un niveau supérieur si  nécessaire
    }
}

async function rechercheCocktailFirstLettre(firstLetter) {
    try {
        // Utilisation de AllOrigins pour contourner les problèmes de CORS
        const response = await fetch(`https://api.allorigins.win/get?url=
        ${encodeURIComponent('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + firstLetter)}`);
        const cocktails = await response.json();
        // Les données sont stockées dans cocktails.contents
        return JSON.parse(cocktails.contents); //Retourne les données de la recherche
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la recherche : ', error);
        throw error; //Lance une exception pour gérer l'erreur à un niveau supérieur si nécessaire
    }
}

async function rechercheCocktailIngredient(ingredient) {
    try {
        // Utilisation de AllOrigins pour contourner les problèmes de CORS
        const response = await fetch(`https://api.allorigins.win/get?url=
        ${encodeURIComponent('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient)}`);
        const cocktails = await response.json();
        // Les données sont stockées dans cocktails.contents
        return JSON.parse(cocktails.contents); // Retourne les données de la recherche
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la recherche : ', error);
        throw error; // Lance une exception pour gérer l'erreur à un niveau supérieur si nécessaire
    }
}

async function rechercheCocktailParMotCle(motCle) {
    try {
        let resultats = await rechercheCocktailIngredient(motCle);
        console.log('Résultats de la recherche : ', resultats);

        //on recupère la liste de cocktails;
        let listeCocktailsJSON = resultats.drinks;

        // si aucun cocktail est trouvé on renvoie null
        if(listeCocktailsJSON === null){
            return null;
        }else{
            let listeCocktails = [];

            for (let i = 0; i < listeCocktailsJSON.length; i++) {
                console.log(listeCocktailsJSON[i]);
                listeCocktails[i] = new cocktail(listeCocktailsJSON[i].strDrink, listeCocktailsJSON[i].idDrink, listeCocktailsJSON[i].strDrinkThumb);
            }
            return listeCocktails;
        }
        
    } catch (error) {
        console.error('Erreur lors de la recherche de cocktails : ', error);
    }
}