function hotelRoom(input){
    let month = input[0]
    let daysInHotel = Number(input[1])
    let studio = 0
    let appartm = 0

    if(month === "May" || month === "October"){
        studio = daysInHotel * 50
        appartm = daysInHotel * 65
        if(daysInHotel > 14){
            studio = studio * 0.70
            appartm = appartm * 0.90
        }else if(daysInHotel > 7){
            studio = studio * 0.95
            
        }
    }else if(month === "June" || month === "September"){
        studio = daysInHotel * 75.20
        appartm = daysInHotel * 68.70
        if(daysInHotel > 14){
            studio = studio * 0.80
            appartm = appartm * 0.90

        }
    }else if(month === "July" || month === "August"){
        studio = daysInHotel * 76
        appartm = daysInHotel * 77
        if(daysInHotel > 14){
            appartm = appartm * 0.90
        }
    }
    console.log(`Apartment: ${appartm.toFixed(2)} lv.`)
    console.log(`Studio: ${studio.toFixed(2)} lv.`)


}
hotelRoom(["August", 20])