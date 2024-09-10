let T = [1,2,3,4,5];
let debut = 0;
let fin = T.length - 1;

while (debut < fin) {
    let temp = T[debut];
    T[debut] = T[fin];
    T[fin] = temp;

    debut++;
    fin--;
}

console.log (T);