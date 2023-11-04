const { default: axios } = require('axios')
const debug = require('./helpers')
const TelegramBot=require('node-telegram-bot-api')
const Sleep = require('./Buttons/Sleep/Sleep')
const BathroomClass = require('./Buttons/Bathroom/Bathroom')
const HomeClass = require('./Buttons/Home/Home')
const CookingClass = require('./Buttons/Cooking/Cooking')
const StreetClass = require('./Buttons/Street/Street')
const Buttons = require('./Buttons/Buttons')
const MailClass = require('./Buttons/Mail/Mail')
const token = '6494196167:AAFwXzkWu9YrIwXBqvEkEEJLL-CxpBu2E7k'
const bot = new TelegramBot(token, {
  polling: true
})
let lock = false
let {
  btnSleep,
  btnCooking,
  btnCheckEmail,
  btnStreet,
  btnHome,
  btnWash,
  btnExitBathroom,
  btnBathroom,
  btnSleep1,
  btnSleep3,
  btnSleep8,
  btnCook,
  btnFridge,
  btnNewsPaper,
  btnWork,
  btnPayRoom,
  btnMyMessage,
  btnMailPay,
  btnOther,
  btnStreetCleaner,
  btnCarWash,
  btnFactory,
  btnsStreet,
  btnFood,
  btnShop,
  btnStop,
  btnGym,
} = Buttons
let sleep, bathroom, home, cooking, mail, street

bot.on('message', msg => {
  const text = msg.text
  
  bot.on('callback_query', function (msg) {
    console.log()
    // console.log('msg.message.text: ', msg)
    // console.log('msg.message.text: ', msg.data)
    // console.log(msg.data === btnWash.text)
    console.log()
    if(msg.data === btnWash.text) {
      bathroom.wash()
    } else if(msg.data === btnHome.callback_data) {
      home.join()
    } else if(msg.data === btnBathroom.callback_data) {
      bathroom.join()
    } else if(msg.data === btnExitBathroom.callback_data) {
      bathroom.exit()
    } else if(msg.data === btnSleep.callback_data) {
      sleep.toSleep()
    } else if(msg.data === btnSleep1.callback_data) {
      sleep.sleepHour()
    } else if(msg.data === btnSleep3.callback_data) {
      sleep.sleepThree()
    } else if(msg.data === btnSleep8.callback_data) {
      sleep.sleepEightHour()
    } else if(msg.data === btnCooking.callback_data) {
      cooking.join()
    } else if(msg.data === btnCook.callback_data) {
      cooking.cook()
    } else if(msg.data === btnFridge.callback_data) {
      cooking.fridge()
    } else if(msg.data === btnCheckEmail.callback_data) {
      mail.join()
    } else if(msg.data === btnWork.callback_data) {
      mail.work()
    } else if(msg.data === btnFactory.callback_data) {
      mail.applyJob()
    } else if(msg.data === btnCarWash.callback_data) {
      mail.applyJob()
    } else if(msg.data === btnStreetCleaner.callback_data) {
      mail.applyJob()
    } else if(msg.data === btnPayRoom.callback_data) {
      mail.payRoom()
    } else if(msg.data === btnStreet.callback_data) {
      street.join()
    } else if (msg.data === btnFood.callback_data) {
      street.food()
    } else if (msg.data === btnShop.callback_data) {
      street.shop()
    } else if (msg.data === btnStop.callback_data) {
      street.stop()
    } else if (msg.data === btnGym.callback_data) {
      street.gym()
    }
    return
  });
  console.log(text)
 
  bot.onText(/\/start/, async msg => {
    lock = false
    console.log(msg.chat)
    const res = await axios.post('http://1.ce58977.tw1.ru/api/users', {
      id: msg.chat.id,
      name: msg.chat.first_name + ' ' + msg.chat.last_name
    })
    if(res.status === 500) {
      console.log('res.status', res.status)
    } else {
      console.log('start', res.data)
    }
      if(!lock) {
        sleep = new Sleep(bot, msg.chat.id)
        bathroom = new BathroomClass(bot, msg.chat.id)
        home = new HomeClass(bot, msg.chat.id)
        cooking = new CookingClass(bot, msg.chat.id)
        mail = new MailClass(bot, msg.chat.id)
        street = new StreetClass(bot, msg.chat.id)
        lock = true
        home.start()
      }
  })

})
