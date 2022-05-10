function lunchBreak(input){
    let serial = input[0]
    let serialDuration = Number(input[1])
    let breakDuration = Number(input[2])

    let lunchTime = breakDuration * 1/8
    let restTime = breakDuration * 1/4
    let timeForWatching = breakDuration - lunchTime - restTime

    let difference = Math.abs(timeForWatching - serialDuration)

    if ( timeForWatching >= serialDuration){
        console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(difference)} minutes free time.`)
        

    } else{
        console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(difference)} more minutes.`)
        
    }
}
lunchBreak(["Teen Wolf", 48, 60])