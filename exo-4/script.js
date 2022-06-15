// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

secretMessage.pop(); //supprimer la dernière valeur su tableau

secretMessage.push('to','program'); //ajouter les mots a la fin du tableau

secretMessage.indexOf('easily'); //rechercher l'index de easily

secretMessage.splice(6,1,"right"); //change a l'index 6 le mots par right

secretMessage.shift(); //suppression 1er élément du tableau

secretMessage.unshift("Programming") // ajouter la chaine "Programming" en début de tableau

secretMessage.splice(5,5,'know'); //change de 5 valeur a partir de l'index 5 par le mots par 'know'

console.log(secretMessage.join(' ')); //afficher le message secret avec des espaces