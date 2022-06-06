function tradeCommissions(input){
    let city = input[0]
    let tradeAmount = Number(input[1])
    let commission = 0

    if(city == "Sofia"){
        if(tradeAmount >= 0 && tradeAmount <= 500){
            commission = tradeAmount * 0.05
        }else if(tradeAmount > 500 && tradeAmount<= 1000){
            commission = tradeAmount * 0.07
        }else if(tradeAmount > 1000 && tradeAmount<= 10000){
            commission = tradeAmount * 0.08
        }else if( tradeAmount > 10000){
            commission = tradeAmount * 0.12
        }else {
            console.log("error")
        }
    }else if(city == "Varna"){
        if(tradeAmount >= 0 && tradeAmount <= 500){
            commission = tradeAmount * 0.045
         } else if(tradeAmount > 500 && tradeAmount<= 1000){
            commission = tradeAmount * 0.075
        }else if(tradeAmount > 1000 && tradeAmount<= 10000){
            commission = tradeAmount * 0.1
        }else if(tradeAmount > 10000){
            commission = tradeAmount * 0.13
        }else{
            console.log("error")
        }
    }else if(city == "Plovdiv"){
        if(tradeAmount >= 0 && tradeAmount <= 500){
            commission = tradeAmount * 0.055
        }else if(tradeAmount > 500 && tradeAmount<= 1000){
            commission = tradeAmount * 0.08
        }else if(tradeAmount > 1000 && tradeAmount<= 10000){
            commission = tradeAmount * 0.12
        }else if(tradeAmount > 10000){
            commission = tradeAmount * 0.145
        }else{
            console.log("error")
        }
    }else{
        console.log("error")
    }
    
    if( commission > 0){
        console.log(commission.toFixed(2))
    }
}
tradeCommissions(["Sofia", 1500])