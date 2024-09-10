const tableau = [14, 5, 28, 3, 9, 17, 22, 1, 8];
let plusGrand = tableau[0];
let plusPetit = tableau[0];
for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > plusGrand) {
        plusGrand = tableau[i];
    }
    if (tableau[i] < plusPetit) {
        plusPetit = tableau[i];
    }
}
console.log("Le plus grand élément du tableau est : " + plusGrand);
console.log("Le plus petit élément du tableau est : " + plusPetit);
