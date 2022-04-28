function computerPlay() {
    let x = Math.floor(Math.random() * 3);

    if (x === 0){
        x = 'Rock';
    }else if (x === 1){
        x = 'Paper';
    } else if(x === 2){
        x ='Scissors';
    }
    console.log(x)
}