function timeAdd15Minutes(input){
    let hours = Number(input[0])
    let minutes = Number(input[1])

    let totalMin = hours * 60 + minutes +15
    let h = Math.floor(totalMin/60)
    let min = totalMin % 60

    if( h > 23){
        h = 0
    }

    if(min < 10){
        console.log(`${h}:0${min}`)
    }else{
        console.log(`${h}:${min}`)
    }
}
timeAdd15Minutes([23, 59])