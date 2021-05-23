function returnFirstTwoDrivers(driverArray){
    return driverArray.slice(0,2)
}

function returnLastTwoDrivers(driverArray){
    const totalDrivers = driverArray.length
    return driverArray.slice(totalDrivers - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function(fare){ return fare * multiplier}
}

function fareDoubler(fare){
    const doubler = createFareMultiplier(2)
    return doubler(fare)
}

function fareTripler(fare){
    const tripler = createFareMultiplier(3)
    return tripler(fare)
}

function selectDifferentDrivers(driverArray, selector){
    return selector(driverArray)
}