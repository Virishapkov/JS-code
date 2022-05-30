function operationsBetweenNumbers(input){
    let n1 = Number(input[0])
    let n2 = Number(input[1])
    let operator = input[2]
    let res = 0

    if(operator === "+"){
        res = n1 + n2
        let evenOrOdd = 0
        if(res % 2 === 0){
            evenOrOdd = "even"
        }else{
            evenOrOdd = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${res} - ${evenOrOdd}`)
    }else if(operator === "-"){
        res = n1 - n2
        if(res % 2 === 0){
            evenOrOdd = "even"
        }else{
            evenOrOdd = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${res} - ${evenOrOdd}`)
    }else if(operator === "*"){
        res = n1 * n2
        if(res % 2 === 0){
            evenOrOdd = "even"
        }else{
            evenOrOdd = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${res} - ${evenOrOdd}`)
    }else if(operator ==="/"){
        res = n1 / n2
        if(n2 === 0){
            console.log(`Cannot divide ${n1} by zero`)
        }else{
            console.log(`${n1} / ${n2} = ${res.toFixed(2)}`)
        }
    }else if( operator === "%"){
        res = n1 % n2
        if(n2 === 0){
            console.log(`Cannot divide ${n1} by zero`)
        }else{
            console.log(`${n1} % ${n2} = ${res}`)
        }
    }
}
operationsBetweenNumbers([10, 0, "%"])