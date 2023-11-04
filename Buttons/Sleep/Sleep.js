const {btnsHome} = require('../Home/HomeBtns')
const {btnsSleep} = require('../Sleep/SleepBtns')

class SleepClass {

  constructor(bot, id) {
    this.bot = bot
    this.id = id
    this.btnsHome = btnsHome
    this.btnsSleep = btnsSleep
    this.replyHome = {
      reply_markup: {
        inline_keyboard: this.btnsHome
      }
    }
    this.replySleep = {
      reply_markup: {
        inline_keyboard: this.btnsSleep
      }
    }
    this.afterSleep = [
      {sleep: 'Вы восстановили 25% энергии, вам стало полегче', callback_data: "Вы восстановили 25% энергии, вам стало полегче"},
      {sleep: 'Вы восстановили 50 % энергии, вам стало намного лучше', callback_data: "Вы восстановили 50 % энергии, вам стало намного лучше"},
      {sleep: 'Вы восстановили 100 % энергии, силы полностью восстановлены', callback_data: "Вы восстановили 100 % энергии, силы полностью восстановлены"}
    ]
  }
  toSleep() {
    this.bot.sendPhoto(this.id, './images/sleep.jpg', this.replySleep)
  }
  sleepHour() {
    this.bot.sendMessage(this.id, this.afterSleep[0].sleep, this.replyHome)
  }
  sleepThree() {
    this.bot.sendMessage(this.id, this.afterSleep[1].sleep, this.replyHome)
  }
  sleepEightHour() {
    this.bot.sendMessage(this.id, this.afterSleep[2].sleep, this.replyHome)
  }
}
module.exports = SleepClass