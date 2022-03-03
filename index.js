// Code your solutions in this file
function writeCards(names, event){
    let thankYou = []
    for(let index = 0; index < names.length; index++) {
        thankYou.push(`Thank you, ${names[index]}, for the wonderful ${event} gift!`)
    }
    return thankYou
}

function countDown(i){
    while (i >= 0) {
        console.log(
        i--)
    }
}