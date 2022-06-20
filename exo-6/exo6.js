// Partie 8 code academy
console.log("exo-6");

// commenter cette ligne de code.
var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};

// afficher le nombre de voitures de Joe
joeInfo.cars.length;
// changer le nombre de salle de bains de Joe : il n'en possède au'une.
joeInfo.bathrooms = 1;
// Joe vient d'acquérir un garage changer la structure pour le refléter.
joeInfo.garage = true;

var team = {
    _player: {
        firstName: "Pablo",
        lastName: "Sanchez",
        age: 11,
    },
    _games: {
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27,
    },
};

//Créer une fonction addplayer qui prends trois arguments : first, last, et age et ajoute à l'objet team un joueur.
function addplayer(first, last, age) {

    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

//Appel de la méthode
team._player = new addplayer("Lionel", "Messi", 36);
team._player = new addplayer("Marco", "Reus", 34);
team._player = new addplayer("Karim", "Benzema", 30);
team._player = new addplayer("Kinsley", "Coman", 26);

console.log(team._player);

//Créer une fonction addmatch qui prends trois arguments : opponent, teamPoints, et OpponentPoints et ajoute à l'objet games une partie.
function addmatch(opponent, teamPoints, opponentPoints) {

    this.opponent = opponent;
    this.teamPoints = teamPoints;
    this.opponentPoints = opponentPoints;
}

//Appel de la méthode
team._games = new addmatch('Real Madrid', 35, 21);
team._games = new addmatch('FC Barcelone', 42, 14);
team._games = new addmatch('Borussia Dortmund', 51, 32);
team._games = new addmatch('Fc Bayern Munich', 28, 10);

console.log(team._games);

// Calculer la somme des points de votre équipe sur tous les matchs joués
team._games.teamPoints += team._games.teamPoints;

//Calculer la moyenne des points de l'équipe adverse sur tous les matchs.
function ArrayAvg(opponentPoints) {
    var i = 0, summ = 0, ArrayLen = opponentPoints.length;
    while (i < ArrayLen) {
        summ = summ + opponentPoints[i++];
}
    return summ / ArrayLen;
}

//Appel de la fonction pour calculer la moyen des point de l'equipe adverse
console.log(ArrayAvg(team._games.opponentPoints));


function older() {
    for(let i = 0; i < this.age.length; i++){
        if(this.age[i] < this.age){
            return this.age[i] = this.age;
        }
        
    }
}

console.log(older());

console.log(team._games.teamPoints)