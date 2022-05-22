function fishingBoat(input){
    let budget = Number(input[0])
    let season = input[1]
    let numberOfFishermen = Number(input[2])
    let sum = 0

    if(numberOfFishermen <= 6){
        switch(season){
            case "Spring": sum = 3000 * 0.90; break;
            case "Summer":
            case "Autumn": sum = 4200 * 0.90; break;
            case "Winter": sum = 2600 * 0.90; break;
        }
    }else if(numberOfFishermen > 6 && numberOfFishermen <= 11){
        switch(season){
            case "Spring": sum = 3000 * 0.85; break;
            case "Summer":
            case "Autumn": sum = 4200 * 0.85; break;
            case "Winter": sum = 2600 * 0.85; break;
        }
    }else if(numberOfFishermen >=12){
        switch(season){
            case "Spring": sum = 3000 * 0.75; break;
            case "Summer":
            case "Autumn": sum = 4200 * 0.75; break;
            case "Winter": sum = 2600 * 0.75; break; 
        }
    }

    if(numberOfFishermen % 2 == 0){
        if(season === "Spring"|| season === "Summer" || season === "Winter"){
            sum = sum * 0.95
        }
    }

    let diff = Math.abs(budget - sum)

    if(budget >= sum){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}
fishingBoat([2000, "Winter", 13])