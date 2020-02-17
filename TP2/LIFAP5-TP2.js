// Exo 1
//  undefined
// 7  
// 12
// Array(3) [ 6, 7, 8 ]

// Partie 2 de l'exo 1

// nouvelle fonction f2()


  function f2(){
  let tab = [];
  for(var i = 0; i < 3; ++i) {
      function Constante_J() {
        const j = i;
        return j;
      }
      tab.push();
  }
  let t = tab.map( f => f() );
  return t;
}


////////////////////////////////////////////////////////////
// Exercice 2

function garde_entiers_pairs(tab) {
  // let result = [];
  return tab.filter(n => (n % 2 === 0) && !tab.some(isNaN)); // on peut remplacer !tab.some(isNaN) par typeof n === "number"
  /*
  for(let i = 1; i < tab.length; i++) {
    if (tab[i] % 2 == 0) {
      result.push(tab[i]);
    }
  }
  return result;
  */
}



////////////////////////////////////////////////////////////
// Exercice 3
////////////////////////////////////////
// données exemple
const donnees_exemple = 
    [
        { "titre":"CM3 : programmation fonctionnelle en js",
          "date": "2017-02-27",
          "contenu": `Ce cours introduit les notions de programmation avec des fonctions d'ordre supérieur.

Après avoir revu la définition de fonction, on abordera les fonctions renvoyées en résultat, ainsi que la l'utilisation de valeurs extérieures à la définition de la fonction.

Outre la manipulation des fonctions commes objets de première classe, la notion de fermeture est un des principaux concepts à retenir de ce cours.`},
        
        { "titre": "CM1 : introduction à js (1/2)",
          "date": "2017-01-30",
          "contenu": `Ce cours décrit les bases du langage JavaScript.

On y verra en particulier les valeurs, les types, les structures de tableau et de dictionnaire. Enfin on abordera la définition des fonctions et les méthodes.` },
        
        { "titre": "CM2 : introduction à js (2/2)",
          "date": "2017-02-06",
          "contenu": `Ce cours poursuit la présentation du langage Javascript.

Dans ce cours, on abordera les APIs de chaînes de caractères et de tableaux, ainsi que les fonctions passées en argument.`},
        
        { "titre": "CM4 : programmation asynchrone",
          "date": "2017-03-06",
          "contenu": `Ce cours aborde les notions de programmation asynchrone.

Après quelques notions fondamentales sur les fonction introduites via le lamnbda-calcul, ce cours abordera des constructions standard de programmation asynchrone, telle que les callbacks et les promesses.`},

        { "titre": "L'UE LIFAP5 est créée",
          "date": "2016-09-01",
          "contenu": "Création de l'UE LIFAP5: programmation fonctionnelle pour le Web.\n\nCette UE aborde la programmation fonctionnelle à travers Javascript et la programmation Web." }
    ];
////////////////////////////////////////

function trie_articles_date(nouvelles) {
// TODO: à changer
// date_tab = donnees_exemple.filet(n => Object.values(donnes_exemple) === "date");
// return Object.values(donnes_exemple[0])
//const date_tab = nouvelles.sort(n => Object.values((nouvelles) === "date"));
//return date_tab.filter(Object.n => Object.n === "dates");
  
// a est la date de la nouvelles actuel et b de la nouvelle comparé.
function compare_nouvelles(nvl1, nvl2) // Trie une liste d'article par date d'article décroissante. Cette fonction renvoi un nouveau tableau.
{
  // Si nvl1 est supérieur à nvl2 alors on place nvl1
  // Si nvl1 est plus récente;
  if (nvl1.date > nvl2.date)
  {
    return -1;
  }
  if (nvl1.date < nvl2.date)
  {
    // cas où nvl2 est à placer avant nvl1 dans le résultat
    return 1;
  } 
  else {
    return 0;
    //meme date
  }
}
 let result = Array.from(nouvelles); //Copie du tab nouvelles
 result.sort(compare_nouvelles);
 return result;
 
}

////////////////////////////////////////

function formate_titre(nouvelle) {
  // TODO: à changer

}

////////////////////////////////////////

function liste_nouvelles_html(nouvelles) {
  // TODO: à changer
  return `<p>On attend la liste des ${nouvelles.length} nouvelles ici.</p>`;
}

////////////////////////////////////////////////////////////
// Exercice 3.2

function filtre_mois_annee(nouvelles, mois, annee) {
  // TODO: à changer
  return nouvelles;
}

////////////////////////////////////////

function maj_liste_nouvelles() {
  // TODO: à changer
}

////////////////////////////////////////

// Fonction appelée une fois la page HTML chargée
function init_3_2() {
  // TODO: à changer
  console.log("Initialisation pour l'exercice 3.2");
}


////////////////////////////////////////////////////////////
// Exercice 3.3

// Fonction appelée une fois la page HTML chargée
function init_3_3() {
  // TODO: à changer
  console.log("Initialisation pour l'exercice 3.3");
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Code permettant d'utiliser les fonctions ci-dessus dans la page LIFAP5-TP2.html
document.addEventListener('DOMContentLoaded', function(){

  
  if (document.getElementById("title-test-tp2") == null) { // garde pour ne pas exécuter dans la page des tests unitaires.
  
    document.getElementById("elt-nouvelles").innerHTML = liste_nouvelles_html(donnees_exemple);

    init_3_2();

    init_3_3();
    
  }
  
}, false);

