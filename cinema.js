function cinema(input){
    let ticketType = input[0]
    let rows = Number(input[1])
    let colons = Number(input[2])
    let income = 0

    if(ticketType === "Premiere"){
        income = rows * colons * 12
    }else if(ticketType === "Normal"){
        income = rows * colons * 7.50
    }else if(ticketType === "Discount"){
        income = rows * colons * 5
    }
    console.log(`${income.toFixed(2)} leva`)
}
cinema(["Normal", 21, 13])