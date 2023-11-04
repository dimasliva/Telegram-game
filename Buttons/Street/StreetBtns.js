const {btnHome, btnStreet} = require('../Home/HomeBtns')

let btnFood = {text: 'Шаурма', callback_data: "Шаурма"}
let btnShop = {text: 'Пятёрочка', callback_data: "Пятёрочка"}
let btnStop = {text: 'Остановка', callback_data: "Остановка"}
let btnGym = {text: 'Качалка', callback_data: "Качалка"}

let btnTea = {text: 'Чай 50₽', callback_data: "Чай 50₽"}
let btnHotDog = {text: 'Хот дог 100₽', callback_data: "Хот дог 100₽"}
let btnSmallShaverma = {text: 'Шаурма 120₽', callback_data: "Шаурма 120₽"}
let btnBigShaverma = {text: 'Большая шаурма 200₽', callback_data: "Большая шаурма 200₽"}

let btnBread = {text: 'Хлеб', callback_data: "Хлеб"}
let btnVegetables = {text: 'Овощи', callback_data: "Овощи"}
let btnMeat = {text: 'Мясо', callback_data: "Мясо"}
let btnEgg = {text: 'Яйца', callback_data: "Яйца"}
let btnFish = {text: 'Рыба', callback_data: "Рыба"}
let btnPasta = {text: 'Макароны', callback_data: "Макароны"}
let btnCandy = {text: 'Сладости', callback_data: "Сладости"}
let btnSeasoning = {text: 'Приправы', callback_data: "Приправы"}

let btnCenter = {text: 'Центральный район', callback_data: "Центральный район"}
let btnNorth = {text: 'Северный район', callback_data: "Северный район"}
let btnWest = {text: 'Западный район', callback_data: "Западный район"}
let btnEast = {text: 'Восточный район', callback_data: "Восточный район"}
let btnSouth = {text: 'Южный район', callback_data: "Южный район"}

let btnPayGym = {text: 'Оплатить ♂gym♂', callback_data: "Оплатить ♂gym♂"}


let btnsStreet = [[btnShop, btnFood], [btnStop, btnGym], [btnHome]]
let btnsShaverma = [[btnTea, btnHotDog], [btnSmallShaverma, btnBigShaverma], [btnStreet]]
let btnsShop5 = [[btnBread, btnVegetables], [btnMeat, btnEgg], [btnFish, btnPasta], [btnCandy, btnSeasoning], [btnStreet]]
let btnsStop = [[btnCenter, btnNorth], [btnWest, btnEast], [btnSouth, btnStreet]]
let btnsGym = [[btnPayGym, btnStreet]]


module.exports = {
  btnsStreet,
  btnFood,
  btnShop,
  btnStop,
  btnGym,
  btnsShaverma,
  btnsShop5,
  btnsStop,
  btnsGym,
}