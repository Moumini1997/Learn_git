/*Inverser une chaîne de caractères :
 Écrivez une fonction qui inverse une chaîne
  de caractères donnée.*/

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

/*
Compter les caractères : 
Créez une fonction qui compte le nombre
 de caractères dans une chaîne de caractères.
 */

 function countCharacters(str) {
  return str.length;
}

/*Mise en majuscules des mots :
 implémentez une fonction qui met en majuscule
  la première lettre de chaque mot d’une phrase.
  */
  function capitalizeWords(phrase) {
  return phrase
    .split(" ")                     
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");                 
}

/*Trouver le maximum et le minimum :
 Écrivez des fonctions pour trouver les 
 valeurs maximales et minimales dans un tableau de nombres.
*/

function findMax(arr) {
  return Math.max(...arr); // retourne le plus grand nombre du tableau
}

function findMin(arr) {
  return Math.min(...arr); // retourne le plus petit nombre du tableau
}

/*
Somme d'un tableau : 
Créez une fonction qui calcule la 
somme de tous les éléments d'un tableau.
*/

function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

/*Filtrer un tableau : implémentez une fonction 
qui filtre les éléments d’un tableau en 
fonction d’une condition donnée. */

function filterArray(arr, condition) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

/*Factorielle : Écrivez une fonction pour calculer la factorielle d'un nombre donné.*/

function factorial(n) {
  if (n < 0) return undefined; // factorielle non définie pour les nombres négatifs
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/*Vérification des nombres premiers :
 Créez une fonction pour vérifier si un
  nombre est premier ou non.*/


  function isPrime(n) {
   if (n <= 1) return false;      
  if (n === 2) return true;       
  if (n % 2 === 0) return false;  

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false; 
  }

  return true; 
}

/*Suite de Fibonacci : Implémentez une fonction qui génère 
la suite de Fibonacci jusqu'à un nombre donné de termes.
 (Recherchez sur Internet.) */

 function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const seq = fibonacci(n - 1);
  seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  return seq;
}
