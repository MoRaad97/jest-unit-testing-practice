function capitalize(str) {
    let splitTheString = str.split(" ")
    var capString = ``
    let savedCap = ""
    for (let i = 0; i < splitTheString.length; i++) {
        const firstLatter = splitTheString[i][0].toUpperCase()
        const wordWithOutTheFirstLetter = splitTheString[i].slice(1)
        capString = `${savedCap} ${firstLatter}${wordWithOutTheFirstLetter}`;
        savedCap = capString
    }
    return capString.trim()
}

module.exports = capitalize;