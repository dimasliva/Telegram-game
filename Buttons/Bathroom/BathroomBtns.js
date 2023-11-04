let btnWash = {text: 'Искупаться', callback_data: "Искупаться" }
let btnExitBathroom = {text: 'Выйти из ванны', "callback_data": "Выйти из ванны"}
let btnBathroom = {text: 'Зайти в ванную', "callback_data": "Зайти в ванную"}
let btnsBathroom = [[btnWash, btnExitBathroom]]
let leaveBathroomBtns =  [[btnExitBathroom]]

module.exports = {
  btnWash,
  btnExitBathroom,
  btnBathroom,
  btnsBathroom,
  leaveBathroomBtns
}