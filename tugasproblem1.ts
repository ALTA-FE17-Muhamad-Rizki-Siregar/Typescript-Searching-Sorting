function bubbleShort (arr : Array <number>){
    let len = arr.length;
    let dupe = [...arr];
    for ( let i = 0; i <len; i++){
        for (let j = 0; j < len;j++){
            if (dupe [j]> dupe[j+1]) {
                let varDupe = dupe[j];
                dupe [j] = dupe [j+1];
                dupe [j+1] =varDupe;
            }
        }
    }
    return dupe;

}
console.log(bubbleShort([80, 65, 90, 75, 85, 70, 95, 60]));