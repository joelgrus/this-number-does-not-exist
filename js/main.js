const button = document.getElementById("generate-button")
const number = document.getElementById("number")

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
    button.disabled = true
    number.innerText = "<<generating>>"
    while (true) {
        var n = ((10 * Math.random()) ** (20 * Math.random()) * (-0.5 + Math.random())).toString()

        if (n.indexOf('e') == -1) {
            if (Math.random() < 0.1) {
                n = corrupt(n)
            }

            const wait = 500 + Math.random() * 500
            setTimeout(() => {
                number.innerText = n
                button.disabled = false
            }, wait)
            return
        }
    }
}

generateNumber()
