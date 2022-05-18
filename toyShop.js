function toyShop (input){
    let vacationPrice = Number(input[0])
    let puzzlePacks = Number(input[1])
    let dollPacks = Number(input[2])
    let teddyBearPacks = Number(input[3])
    let minionPacks = Number(input[4])
    let truckPacks = Number(input[5])

    let totalToyPacks = puzzlePacks + dollPacks + teddyBearPacks + minionPacks + truckPacks
    let allToyPrice = puzzlePacks * 2.60 + dollPacks * 3 + teddyBearPacks * 4.10 + minionPacks * 8.20 + truckPacks * 2

    if (totalToyPacks >= 50){
        allToyPrice = allToyPrice -(allToyPrice * 25/100)

    }else {
        allToyPrice = allToyPrice
    }
    let profit = allToyPrice - (allToyPrice * 10/100)
    let sum = 0

    if ( profit >= vacationPrice) {
        sum = profit - vacationPrice
        console.log(`Yes! ${sum.toFixed(2)} lv left.`)

    } else {
        sum = vacationPrice - profit
        console.log(`Not enough money! ${sum.toFixed(2)} lv needed.`)
    }
}
toyShop([320, 8, 2, 5, 5, 1])