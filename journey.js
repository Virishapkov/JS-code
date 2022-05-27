function journey(input){
    let budget = Number(input[0])
    let season = input[1]
    let destination = 0
    let accommodation = 0

    if(budget <= 100){
        if( season === "summer"){
            budget = budget * 0.30
            destination = "Bulgaria"
            accommodation = "Camp"
        }else if(season === "winter"){
            budget = budget * 0.70
            destination = "Bulgaria"
            accommodation = "Hotel"
        }
    }else if(budget <= 1000){
        if(season === "summer"){
            budget = budget * 0.40
            destination = "Balkans"
            accommodation = "Camp"
        }else if(season === "winter"){
            budget = budget * 0.80
            destination = "Balkans"
            accommodation = "Hotel"
        }
    }else if(budget > 1000){
        if(season === "summer" || season === "winter"){
            budget = budget * 0.90
            destination = "Europe"
            accommodation = "Hotel"
        }
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${accommodation} - ${budget.toFixed(2)}`)
}
journey([1500, "summer"])