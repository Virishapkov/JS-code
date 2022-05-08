function godzilaVsKong(input){
    let budget = Number(input[0])
    let statists = Number(input[1])
    let moneyForOneStatistClothes = Number(input[2])
    let backgroundPrice = budget * 10/100

    let totalMoneyForMovie = 0

    if(statists > 150){
        totalMoneyForMovie = backgroundPrice + (statists * moneyForOneStatistClothes) * 0.90
    } else {
        totalMoneyForMovie = backgroundPrice + (statists * moneyForOneStatistClothes)
    }
    let difference = Math.abs( budget - totalMoneyForMovie)

    if(budget >= totalMoneyForMovie){
        console.log("Action!")
        console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`)
    } else{
        console.log("Not enough money!")
        console.log(`Wingard needs ${difference.toFixed(2)} leva more.`)
    }
}
godzilaVsKong([9587.88, 222, 55.68])