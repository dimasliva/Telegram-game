let btnMail = {text: 'Письма', callback_data: "Письма"}
let btnMailPay = {text: 'Платная подписка', callback_data: "Платная подписка"}
let btnHome = {text: 'Домой', callback_data: "Домой"}
let btnCheckEmail = {text: 'Проверить почтовый ящик', callback_data: "Проверить почтовый ящик"}
let btnOther = {text: 'Прочее', callback_data: "Прочее"}
let btnNewsPaper = {text: 'Газета', callback_data: "Газета"}
let btnWork = {text: 'Работа', callback_data: "Работа"}
let btnPayRoom = {text: 'Оплатить квартиру', callback_data: "Оплатить квартиру"}
let btnMyMessage = {text: 'Мои письма', callback_data: "Мои письма"}
let btnStreetCleaner = {text: 'Дворник', callback_data: "Дворник"}
let btnCarWash = {text: 'Автомойка', callback_data: "Автомойка"}
let btnFactory = {text: 'Завод', callback_data: "Завод"}
let btnsWork = [[btnStreetCleaner, btnCarWash, btnFactory]]
let btnsMessages = [[btnWork, btnMyMessage], [btnNewsPaper, btnOther, btnHome],[btnPayRoom]]


module.exports = {
  btnMail,
  btnHome, 
  btnCheckEmail,
  btnMailPay,
  btnsMessages,
  btnOther,
  btnNewsPaper,
  btnWork,
  btnPayRoom,
  btnMyMessage,
  btnStreetCleaner,
  btnCarWash,
  btnFactory,
  btnsWork
}