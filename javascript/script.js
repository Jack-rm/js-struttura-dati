var card = {

    name : "Daring Apprentice",
    strength : 1,
    constitution : 1,
    launchCost : {  // oggetto
        common: 1,
        white: 0,
        ublue: 2,
        black: 0,
        red: 0,
        green: 0,
    },
    cardType : "creature",
    subTyoe : "wizard",
    expansion : {  // oggetto
        expansionId: 8,
        name: "Eighth Edition",
        rarity: "rare",
        collectionCap: 350,
    },
    collectionNumber : 73,
    flavourText : {  // oggetto
        author: "Dany Orizio",
        quote: "I've seen my master do this a hundred times. How hard can it be?",
    },
    abilities : [
        {
            launchCost : {  // oggetto
                common: 0,
                white: 0,
                ublue: 0,
                black: 0,
                red: 0,
                green: 0,
            },
            description: `Sacrifice Daring Apprentice: Counter target spell.`,
        }
    ],
    illustrator : {
        id : 756,
        name : "Dany",
        surname : "Orizio",
        dateOfBirth : "11/09/1988",
        placeOfBirth : "Atlanta, Georgia, US",
    },
    borderType: "White",
    illustrationImage: "##",
    cardImage: "img/prova.jpg",


    combinedManaCost : function() {  // Funzione per calcolare la somma dei costi di mana
        let somma = 0;
        for  ( let key in this.launchCost){
            somma += this.launchCost[key];
        }
        return somma;
    }, 
};


console.log(card);
console.log(card.combinedManaCost());

// card.abilities.push({/*qui inserisco la nuova key per l'oggetto abilità*/});