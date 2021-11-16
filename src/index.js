const messages = [
    "Oscar",
    "Ana",
    "Jacinta",
    "Yesica",
    "Josias",
    "chuyMalboro",
    "El Burras",
    "Romulo",
]
const randomMsg = () =>{
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports =  {
    randomMsg
}