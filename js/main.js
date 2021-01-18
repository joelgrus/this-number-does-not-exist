const setNumber = () => {
    const number = (10 * Math.random()) ** (100 * Math.random()) * (1 + Math.random())

    document.getElementById("number").innerText = number    
}

setNumber()
