const generateNumber = () => {
    while (true) {
        const number = (10 * Math.random()) ** (20 * Math.random()) * (-0.5 + Math.random())

        if (number.toString().indexOf('e') == -1) {
            document.getElementById("number").innerText = number    
            return
        }
    }
}

generateNumber()
