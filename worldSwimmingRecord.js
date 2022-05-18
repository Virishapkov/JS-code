function worldSwimmingRecord (input){
    let actualRecord = Number(input[0])
    let distanceInM = Number(input[1])
    let timeInSecForOneMeter = Number(input[2])

    let neededTimeForDistance = distanceInM * timeInSecForOneMeter
    let addedTimeForDistance = Math.floor(distanceInM/15) * 12.5
    let totalTime = neededTimeForDistance + addedTimeForDistance
    

    let differenceActualRecordIvansTime = totalTime - actualRecord

    if (totalTime >= actualRecord){
        console.log(`No, he failed! He was ${differenceActualRecordIvansTime.toFixed(2)} seconds slower.`)
    } else{
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }
}
worldSwimmingRecord([10464, 1500, 20])