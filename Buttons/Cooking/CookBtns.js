const Home = require('../Home/HomeBtns')
let btnFridge = {text: 'Холодильник ', "callback_data": "Холодильник "}
let btnCooking = {text: 'Готовка', callback_data: "Готовка"}
let btnCook = {text: 'Готовить ', "callback_data": "Готовить "}
let btnHome = {text: 'Домой', callback_data: "Домой"}

let btnsCook = [[btnCook, btnFridge, btnHome]]

module.exports = {
  btnFridge,
  btnCooking,
  btnCook,
  btnsCook
}