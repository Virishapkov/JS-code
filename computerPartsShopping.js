function computerPartsShopping(input){
    let budget = Number(input[0])
    let videoCardsAmount = Number(input[1])
    let processorsAmount = Number(input[2])
    let ramMemoryAmount = Number(input[3])
    
    let videoCardPrice = videoCardsAmount * 250
    let processorPrice = (videoCardPrice * 35/100) * processorsAmount
    let ramMemoryPrice = (videoCardPrice * 10/100) * ramMemoryAmount

    let totalPrice = videoCardPrice + processorPrice + ramMemoryPrice

    if ( videoCardsAmount > processorsAmount){
        totalPrice = totalPrice * 0.85
    } else {
        totalPrice = totalPrice
    }
    let difference = Math.abs(budget - totalPrice)
    
    if (budget >= totalPrice){
        console.log(`You have ${difference.toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`)
    }



}
computerPartsShopping([920.45, 3, 1, 1])