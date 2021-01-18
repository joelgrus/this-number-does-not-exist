const randomChar = () => {
    const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const pos = Math.floor(Math.random() * charSet.length)
    return charSet[pos]
}

const corrupt = (s) => {
    const pos = Math.floor(Math.random() * s.length)
    return s.slice(0, pos) + randomChar() + s.slice(pos+1)
}

const generateNumber = () => {
    while (true) {
        var number = ((10 * Math.random()) ** (20 * Math.random()) * (-0.5 + Math.random())).toString()

        if (number.indexOf('e') == -1) {
            if (Math.random() < 0.1) {
                number = corrupt(number)
            }

            document.getElementById("number").innerText = number    
            return
        }
    }
}

generateNumber()
