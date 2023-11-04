const {btnsHome} = require('../Home/HomeBtns')
const {btnsBathroom, leaveBathroomBtns} = require('../Bathroom/BathroomBtns')

class BathroomClass {

  constructor(bot, id) {
    this.bot = bot
    this.id = id
  }
  join() {
    this.bot.sendPhoto(this.id, './images/bathroom.jpeg', {
      reply_markup: {
        inline_keyboard: btnsBathroom
      }
    })
  }
  exit() {
    this.bot.sendPhoto(this.id, './images/room.jpeg', {
      reply_markup: {
        inline_keyboard: btnsHome
      }
    })
  }
  wash() {
    this.bot.sendMessage(this.id, 'Вы теперь чистый, можно смело отправляться в путь', {
      "reply_markup": {
        inline_keyboard: leaveBathroomBtns
      }
    })
  }
}
module.exports = BathroomClass