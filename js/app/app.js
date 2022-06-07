let firstNumber = "";
let lastNumber = "";
let sign = ""
let mathFunction = "";
const input = document.querySelector(".input")
document.querySelector(".equally").addEventListener("click", () => {
  input.value = mathFunction(Number(firstNumber), Number(lastNumber))
  firstNumber = input.value
})
document.querySelector(".clear").addEventListener("click", () => input.value = "")
document.querySelector(".rows-three").addEventListener("click", (item) => {
  const activeClick = item.target
  if (input.value.length === 15) {
    return alert("максимальное количесто символов")
  }
  if (activeClick.classList.contains("point")) {
    if (input.value.indexOf(".") === -1)
      if (input.value === "" || sign !== "") {
        input.value = `0` + activeClick.dataset.value
      } else {
        input.value += activeClick.dataset.value
      }
  }
  if (activeClick.classList.contains("number")) {
    if (input.value === "0") {
      input.value = activeClick.dataset.value
    }
    if (sign === "") {
      input.value += activeClick.dataset.value
      firstNumber = input.value
    } else {
      if (input.value === sign) {
        input.value = activeClick.dataset.value
      } else {
        input.value += activeClick.dataset.value
        firstNumber = input.value
      }
      lastNumber = input.value
    }
  }
})
const signArray = ["+", "—", "X", "/"]
document.querySelector(".rows-two").addEventListener("click", (event) => {
  key = event.target.dataset.value
  if (signArray.includes(key)) {
    input.value = key
    sign = key
    switch (event.target.dataset.value) {
      case "+":
        mathFunction = sum
        break;
      case "—":
        mathFunction = subtraction
        break;
      case "X":
        mathFunction = multiply
        break;
      case "/":
        mathFunction = divide
        break;
      default:
        console.log("default")
        break;
    }
  }
})
function sum(first, last) {
  return first + last
}
function subtraction(first, last) {
  return first - last
}
function multiply(first, last) {
  return first * last
}
function divide(first, last) {
  if (last === 0) {
    alert("делить на 0 нельзя")
    return "Ошибка"
  }
  return first / last
}