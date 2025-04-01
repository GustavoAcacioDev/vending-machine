let saldo = 0
let isDispensing = false

document.getElementById("saldo").innerHTML = `<p>R$ ${saldo}</p>`

function adicionaDinheiro(valor) {
  if (isDispensing) {
    return
  }

  saldo += valor
  document.getElementById("saldo").innerHTML = `<p>R$ ${saldo}</p>`

  updateButtonStates()

  showMessage(`R$ ${valor} inserido`)
}

function compraDoce(tipoDoce) {
  if (isDispensing) {
    return
  }

  let candyPrice = 0
  let candyColor = ""

  if (tipoDoce == "A") {
    candyPrice = 6
    candyColor = "pink"
  } else if (tipoDoce == "B") {
    candyPrice = 7
    candyColor = "blue"
  } else if (tipoDoce == "C") {
    candyPrice = 8
    candyColor = "green"
  }

  if (saldo >= candyPrice) {
    isDispensing = true
    disableButtons()

    let troco = saldo - candyPrice;

    saldo = 0;

    document.getElementById("saldo").innerHTML = `<p>R$ ${saldo}</p>`

    dispenseCandy(candyColor, tipoDoce, candyPrice, troco)

    setTimeout(() => {
      isDispensing = false
      enableButtons()
      updateButtonStates() 
    }, 2000)
  } else {
    showMessage("Saldo Insuficiente")
  }
}

function disableButtons() {
  const buttons = document.querySelectorAll(".button, .candy-button")
  buttons.forEach((button) => {
    button.classList.add("disabled")
  })
}

function enableButtons() {
  const buttons = document.querySelectorAll(".button, .candy-button")
  buttons.forEach((button) => {
    button.classList.remove("disabled")
  })
}

function updateButtonStates() {
  const buttonA = document.getElementById("button-type-a")
  const buttonB = document.getElementById("button-type-b")
  const buttonC = document.getElementById("button-type-c")

  buttonA.classList.toggle("disabled", saldo < 6)
  buttonB.classList.toggle("disabled", saldo < 7)
  buttonC.classList.toggle("disabled", saldo < 8)
}

function showMessage(text) {
  const message = document.createElement("div")
  message.className = "value-message"
  message.textContent = text
  document.body.appendChild(message)

  setTimeout(() => {
    document.body.removeChild(message)
  }, 2000)
}

function dispenseCandy(color, type, price, troco) {
  const tray = document.getElementById("tray")

  const existingCandy = tray.querySelector(".dispensed-candy")
  if (existingCandy) {
    tray.removeChild(existingCandy)
  }

  const candy = document.createElement("div")
  candy.className = `dispensed-candy ${color}`

  let darkColor
  switch (color) {
    case "pink":
      darkColor = "#d44d7a"
      break
    case "blue":
      darkColor = "#2980b9"
      break
    case "green":
      darkColor = "#27ae60"
      break
    case "yellow":
      darkColor = "#d4ac0d"
      break
    case "purple":
      darkColor = "#8e44ad"
      break
    case "orange":
      darkColor = "#d35400"
      break
    default:
      darkColor = "#d44d7a"
  }

  candy.style.background = `radial-gradient(circle at 30% 30%, var(--candy-${color}), ${darkColor})`

  tray.appendChild(candy)
  if(troco == 0){
    showMessage(`Doce ${type} (R$ ${price}) dispensado`)
  } else {
    showMessage(`Doce ${type} (R$ ${price}) dispensado e troco de R$ ${troco} devolvido`)
  }
}

updateButtonStates()

