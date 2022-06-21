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
    _players: [{
        firstName: "Pablo",
        lastName: "Sanchez",
        age: 11,
    }],
    _games: [{
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27,
    }],
};

//Créer une fonction addplayer qui prends trois arguments : first, last, et age et ajoute à l'objet team un joueur.
function addPlayer(first, last, age) {

    var player = {};
    player.firstName = first;
    player.lastName = last;
    player.age = age;
    team._players.push(player);
    return player;
}

//Appel de la méthode pour ajouter les données
var newPlayer1 = new addPlayer('Antoine','Griezmann',31);
var newPlayer2 = new addPlayer('Kinsley','Coman',33);
var newPlayer3 = new addPlayer('Marco','Reus',31);
var newPlayer4 = new addPlayer('Lionel','Messi',35);
var newPlayer5 = new addPlayer('Critiano','Ronaldo',37)

console.log(team._players);

//Créer une fonction addmatch qui prends trois arguments : opponent, teamPoints, et OpponentPoints et ajoute à l'objet games une partie.
function addMatch(opponent, teamPoints, opponentPoints) {

    var games = {};
    games.opponent = opponent;
    games.teamPoints = teamPoints;
    games.opponentPoints = opponentPoints;
    team._games.push(games);
    return games
}

//Appel de la méthode
var newGames1 = new addMatch('Real Madrid', 35, 21);
var newGames2 = new addMatch('Borussia Dortmund', 28, 10);
var newGames3 = new addMatch('FC Bayern Munich', 51, 32);
var newGames4 = new addMatch('Olympique de Marseille', 42, 14);
var newGames5 = new addMatch('Manchester City',10, 41)

console.log(team._games);
console.log(team);

// Calculer la somme des points de votre équipe sur tous les matchs joués
var totalPoints = 0;
var totalOpponentPoints = 0;

//boucle somme point equipes
for(var i=0; i<team._games.length; i++){
    totalPoints = totalPoints + team._games[i].teamPoints;
}

//boucle somme point opponents
for(var i=0; i<team._games.length; i++){
    totalOpponentPoints = totalOpponentPoints + team._games[i].opponentPoints
}

//function retourne joueur le plus vieux
function oldestPlayer(){
	var agePlayer = 0;
	for(var i=0; i<team._players.length;i++){
		var newAgePlayer = team._players[i].age;
			if(newAgePlayer > agePlayer){
				agePlayer = newAgePlayer;
		}
	}
	console.log("Le joueur le plus vieux à " + agePlayer + " ans");
}

//trier les joueur par ordre alphabétique
function alphaPlayer(){
	var namePlayers = [];
	for(var i=0; i<team._players.length;i++){
		var playerName = team._players[i].firstName;
		namePlayers.push(playerName);
		}
	namePlayers.sort();
	console.log(namePlayers);
}


console.log('La somme des points de votre équipe sur tous les matchs : ' + totalPoints);

//Calculer la moyenne des points de l'équipe adverse sur tous les matchs.
console.log("La moyenne des points de l'équipe adverse sur tous les matchs est de : " + totalOpponentPoints/team._games.length);

//appel de la fonction de l'age du joueur le plus vieux
oldestPlayer();

//appel de la fonction pour mettre dans l'odre alphabétique
alphaPlayer();