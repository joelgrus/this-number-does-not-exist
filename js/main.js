const generateNumber = () => {
    const number = (10 * Math.random()) ** (100 * Math.random()) * (-0.5 + Math.random())

    document.getElementById("number").innerText = number    
}

generateNumber()
