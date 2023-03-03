// Code your solution here
function findMatching(driver, name){
    const name1 = name.toUpperCase()
    const matchingDrivers = driver.filter(string => string.toUpperCase() === name1)
    return matchingDrivers
}

function fuzzyMatch(driver, name){
    const beginningLetter = name.slice(0,1)
    const matchingDrivers = driver.filter(string => string.slice(0,1) === beginningLetter)
    return matchingDrivers
}

function matchName(driver, name){
    const matchingDrivers = driver.filter(string => string.name === name)
    return matchingDrivers
}