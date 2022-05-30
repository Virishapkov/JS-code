function onTimeForTheExam(input){
    let hourOfExam = Number(input[0])
    let minuteOfExam = Number(input[1])
    let hourOfArrival = Number(input[2])
    let minuteOfArrival = Number(input[3])

    let examTimeMinutes = hourOfExam * 60 + minuteOfExam
    let arriveTimeMinutes = hourOfArrival * 60 + minuteOfArrival

    if(examTimeMinutes < arriveTimeMinutes){
        console.log("Late")
        let diff = Math.abs(arriveTimeMinutes - examTimeMinutes)
        let h = Math.floor(diff / 60)
        let m = diff % 60

        if(h >= 1){
            if(m < 10){
                console.log(`${h}:0${m} hours after the start`)
            }else{
                console.log(`${h}:${m} hours after the start`)
            }
        }else{
            console.log(`${m} minutes after the start`)
        }
    }else if(examTimeMinutes === arriveTimeMinutes || examTimeMinutes - arriveTimeMinutes <= 30 ){
        console.log("On time")
        let diff = Math.abs(examTimeMinutes - arriveTimeMinutes)

        if(diff !== 0){
            console.log(`${diff} minutes before the start`)
        }
    }else{
        console.log("Early")
        let diff = Math.abs(examTimeMinutes - arriveTimeMinutes)
        let h = Math.floor(diff / 60)
        let m = diff % 60

        if(h >= 1){
            if(m < 10){
                console.log(`${h}:0${m} hours before the start`)
            }else{
                console.log(`${h}:${m} hours before the start`)
            }
        }else{
            console.log(`${m} minutes before the start`)
        }
    } 


}
onTimeForTheExam([11,30, 10, 55])