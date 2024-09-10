let T = [3,5,1,4,2];

for(let i = 0; i < T.length - 1; i++){ 
    let index = i;
    for(let j = i + 1; j < T.length; j++){
        if(T[j] < T[index]){
            index = j;
        }
    }
    if (index !== i) {
        let temp = T[i];
        T[i] = T[index];
        T[index] = temp;
    }
}
console.log(T);