let T = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let x = 11;
let debut = 0;
let fin = T.length - 1;
let result = -1;

while (debut <= fin) {
    let milieu = Math.floor((debut + fin) / 2);

    if (T[milieu] === x) {
        console.log(`Le nombre ${x} existe à l'index ${milieu}`);
        result = milieu;
        break;
    } else if (T[milieu] < x) {
        debut = milieu + 1; 
    } else {
        fin = milieu - 1; 
    }
}

if (result === -1) {
    console.log(`Le nombre ${x} n'existe pas dans le tableau`);
}