function flowers(input){
    let typeOfFlower = input[0]
    let amountOfFlowers = Number(input[1])
    let budget = Number(input[2])
    let sum = 0

    if(typeOfFlower == "Roses"){
        sum = amountOfFlowers * 5
        if(amountOfFlowers > 80){
            sum = sum * 0.90
        }
    }else if(typeOfFlower == "Dahlias"){
        sum = amountOfFlowers * 3.80
        if(amountOfFlowers >90){
            sum = sum * 0.85
        }
    }else if(typeOfFlower == "Tulips"){
        sum = amountOfFlowers * 2.80
        if(amountOfFlowers > 80){
            sum = sum * 0.85
        }
    }else if(typeOfFlower == "Narcissus"){
        sum = amountOfFlowers * 3
        if(amountOfFlowers < 120){
            sum = sum * 1.15
        }
    }else if(typeOfFlower == "Gladiolus"){
        sum = amountOfFlowers * 2.50
        if(amountOfFlowers < 80){
            sum = sum * 1.20
        }
    }

    let difference  = Math.abs(budget - sum)

    if(budget >= sum){
        console.log(`Hey, you have a great garden with ${amountOfFlowers} ${typeOfFlower} and ${difference.toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`)
    }

    
        



    
}
flowers(["Narcissus", 119, 360])