console.log("exo-7");

//console.log(jsonDatas);

//Parcourir les items fournis pour les afficher un à un dans la console
jsonDatas.forEach(function (e) {
    //console.log(e);
});

//Créer un objet qui servira à traduire les types.
var Traduction = {
    videogame: "Jeux Vidéos",
    car: "Voiture",
    house: "Maison",
    show: "Spectacle",

};

//Ajouter une nouvelle clé aux objets existants pour sotcker le type traduit.
jsonDatas.forEach(function (element) {
    element.displayType = Traduction[element.type];
});

//Fonction affiche les articles du type choisie sur click du bouton + afficher ou non les items en rupture de stock.
function SeeItems() {
    var inputType = document.getElementById("type").value;
    var empty = document.getElementById('empty').value;
    sortBy();
    jsonDatas.forEach(function (e) {
        if ((inputType == "" || inputType == e.type) && (empty || e.quantity > 0)) {
            console.log(e);
        }
    });
}

/* 
Fonction qui permet avec le trie et l'ordre de vérifier si le trie est vide
si il ne l'est pas on vérifie que le mot desc soit en majuscule
*/
function sortBy() {
    var sortItems = document.getElementById('sort-by').value;
    var orderItems = document.getElementById('order').value;

    if (sortItems == "default") {
        jsonDatas = baseArray;
    } else {
        var up = true;
        if (orderItems.toLowerCase() != 'desc') {
            up = false;
        }
        jsonDatas = jsonDatas.keySort(sortItems, up);
    }
}

//Fonction qui permet de vérifier si l'on veut l'ordre ASC ou DESC
Array.prototype.keySort = function(key, desc){
    this.sort(function(a, b) {
      var result = desc ? (a[key] < b[key]) : (a[key] > b[key]);
      return result ? 1 : -1;
    });
    return this;
  }

/* -------------------------------------------------------------------------------- */

/* ===== Formulaire ===== */

//Ajouter un formulaire simple permettant d'ajouter un objet à la liste d'objets.

function addform(){
    var elements = document.getElementById('add-item-form').elements; //recupere les elements du formulaire
    //var formData = new FormData(document.getElementById('add-item-form'));
    var newObj = {}; //objet vide qui récupera les données;
    for(let i = 0; i < elements.lenght; i++){ // boucle sur la longeur de elements
        var items = elements.item[i]; // variable items récupère chaque items de elements
        var values = items.value; // variable value récupère la valeur de chaque item

        if(items.type=="number"){ // vérifie si dans le clé type il y a la valeur "number"
			if(!isNaN(parseInt(values))){ //on verifie si parsInt(values) est différent de Nan  /  parseInt() convertit le premier argument de vlaues en une chaîne
				values = parseInt(values); // si oui alors values ceupère parsInt(values)
			}
			else{       //sinon values = 0;
				values=0;
			}
		}
        newObj[items.name] = values; //ajout dans l'objet, l'item 'name' avec la valeur donner dans le fomrulaire
    }
    jsonDatas.push(newObj); // ajout de obj dans l'obj jsonDatas
	SeeItems(); //ajout de la fonction SeeItems précédement créer
	document.getElementById('add-item-form').reset(); //après la boucle on reset les valeurs de l'element form
}

//console.log(jsonDatas)