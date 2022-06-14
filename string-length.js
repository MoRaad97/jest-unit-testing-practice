function strLength(string) {
    if (string.length < 1 || string.length > 10) {
        return `Error`
    }else {
        return string.length
    }
}

module.exports = strLength;

