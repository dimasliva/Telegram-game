const {btnWash,btnExitBathroom,btnBathroom, btnsBathroom, leaveBathroomBtns} = require('../Bathroom/BathroomBtns')
const {btnSleep1,btnSleep3,btnSleep8,btnSleep,btnsSleep} = require('../Sleep/SleepBtns')
const {btnFridge,btnCooking,btnCook,btnsCook} = require('../Cooking/CookBtns')
const {btnCheckEmail} = require('../Mail/MailBtns')

let btnStreet = {text: 'Улица', callback_data: "Улица"}
let btnHome = {text: 'Домой', callback_data: "Домой"}
let btnsHome = [[btnBathroom, btnSleep], [btnCooking, btnCheckEmail], [btnStreet]]


module.exports = {
  btnCheckEmail,
  btnStreet,
  btnHome, 
  btnsHome
}