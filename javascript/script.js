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
        tap: 0,
    },
    cardType : "Creature",
    subType : "Wizard",
    expansion : {  // oggetto
        expansionId: 8,
        name: "Eighth Edition",
        rarity: "Rare",
        collectionCap: 350,
    },
    collectionNumber : 73,
    editions: ["Eighth","Ninth","Modern"],
    flavourText : {  // oggetto
        author: "Dany Orizio",
        quote: "I've seen my master do this a hundred times. How hard can it be?",
    },
    abilities : [  // Array di oggetti
        {
            launchCost : {  // oggetto
                common: 0,
                white: 0,
                ublue: 0,
                black: 0,
                red: 0,
                green: 0,
                tap: 1,
            },
            description: `Sacrifice Daring Apprentice: Counter target spell.`,
        }
    ],
    illustrator : {  // oggetto
        id : 756,
        name : "Dany",
        surname : "Orizio",
        dateOfBirth : "11/09/1988",
        placeOfBirth : "Atlanta, Georgia, US",
    },
    borderType: "White",
    illustrationImage: "##",
    cardImageSource: "img/CardImg.jpg",


    convertedManaCost : function() {  // Funzione per calcolare la somma dei costi di mana
        let somma = 0;
        for  ( let key in this.launchCost){
            somma += this.launchCost[key];
        }
        return somma;
    }, 
};


console.log(card);
console.log(card.convertedManaCost());



let abilitiesHTML = `<strong>No abilities available</strong>`;

if (card.abilities.length){ // card.abilities.length > 0 poichè risulta un booleano, quindi true/false
    abilitiesHTML = `<ul class="my_card_abilities">`;
    
    for (let i = 0; i < card.abilities.length; i++){
        let singleAbility = card.abilities[i];
        abilitiesHTML += `------------------------------------------------------------`
        abilitiesHTML += `<li> Description: ${singleAbility.description}`;
        abilitiesHTML += `<li> Launch cost specific: 
                                <ul class="my_launch_cost">
                                    <li> Common: ${singleAbility.launchCost.common}</li>
                                    <li> White: ${singleAbility.launchCost.white}</li>
                                    <li> Blue: ${singleAbility.launchCost.ublue}</li>
                                    <li> Black: ${singleAbility.launchCost.black}</li>
                                    <li> Red: ${singleAbility.launchCost.red}</li>
                                    <li> Green: ${singleAbility.launchCost.green}</li>
                                    <li> Tap: ${singleAbility.launchCost.tap}</li>
                                </ul>
                            </li>`
        abilitiesHTML += `------------------------------------------------------------`
    }
    abilitiesHTML += `</ul>`;
}



let cardHTML =
`<ul class="my_card_element">
    <li> Name: ${card.name} </li>
    <li> Strength: ${card.strength}</li>
    <li> Constitution: ${card.constitution}</li>
    <li> Converted mana cost: ${card.convertedManaCost()}</li>
    <li> Launch mana cost specific:
        <ul class="my_launch_cost">
            <li> Common: ${card.launchCost.common}</li>
            <li> White: ${card.launchCost.white}</li>
            <li> Blue: ${card.launchCost.ublue}</li>
            <li> Black: ${card.launchCost.black}</li>
            <li> Red: ${card.launchCost.red}</li>
            <li> Green: ${card.launchCost.green}</li>
            <li> Tap: ${card.launchCost.tap}</li>
        </ul>
    </li>
    <li> Card type: ${card.cardType} - ${card.subType}</li>
    <li> Card Number: ${card.collectionNumber} / ${card.expansion.collectionCap}</li>
    <li> Editions: ${card.editions.join(" | ")}</li>
    <li> Expansion:
        <ul class="my_expansions">
            <li> Name: ${card.expansion.name}</li>
            <li> Rarity: ${card.expansion.rarity}</li>
            <li> Collection Cap: ${card.expansion.collectionCap}</li>
        </ul>
    </li>
    <li> Border color: ${card.borderType}</li>
    <li> Flavour text:
        <ul class="my_flavour_text">
            <li> Quote: " <em>${card.flavourText.quote}</em> "</li>
            <li> Author: ${card.flavourText.author}</li>
        </ul>
    </li>
    <li> Abilities: ${abilitiesHTML}</li>
</ul>`;

document.getElementById("my_deck").innerHTML += cardHTML;


let deckIllustrationHTML =
`<ul class="my_illustration_box">
    <li><img src="${card.cardImageSource}" alt="Image of daring Apprentice">
    </li>
    <li><span>------------------------------------------------------------</span></li>
    <li>Illustration info:
        <ul class="my_illustration_info">
            <li>Author: ${card.illustrator.name} ${card.illustrator.surname} born in ${card.illustrator.placeOfBirth} on ${card.illustrator.dateOfBirth}</li>
        </ul>
    </li>
</ul>`

document.getElementById("my_deck_illustration").innerHTML += deckIllustrationHTML;


// card.versions.join() -> join() funzione per aggiungere un divisore ad un array sortito

// card.abilities.push({/*qui inserisco la nuova key per l'oggetto abilità*/});

console.log(card.cardImageSource);
