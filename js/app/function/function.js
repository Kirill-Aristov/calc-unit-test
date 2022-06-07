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
    return "Ошибка"
  }
  return first / last
}
module.exports = { sum, subtraction, multiply, divide }
