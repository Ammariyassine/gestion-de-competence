let T = [2,5,1,6,3,4];

    for(let i = 0 ; i < T.length ; i++){
        for(let j = 0 ; j < T.length - i - 1 ; j++){
            if (T[j] > T[j + 1]){
                let temp = T[j];
                T[j] = T[j + 1];
                T[j + 1] = temp;
            }
    }
}
console.log(T);
