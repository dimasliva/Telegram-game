const {btnsStreet, btnsShaverma, btnsShop5, btnsStop, btnsGym} = require('./StreetBtns')

class StreetClass {
  constructor(bot, id) {
    this.bot = bot
    this.id = id
    this.replyStreet = {
      reply_markup: {
        inline_keyboard: btnsStreet
      }
    }
    this.replyShaverma = {
      reply_markup: {
        inline_keyboard: btnsShaverma
      }
    }
    this.replyShop5 = {
      reply_markup: {
        inline_keyboard: btnsShop5
      }
    }
    this.replyStop = {
      reply_markup: {
        inline_keyboard: btnsStop
      }
    }
    this.replyGym = {
      reply_markup: {
        inline_keyboard: btnsGym
      }
    }
  }
  async join() {
    await this.bot.sendPhoto(this.id, './images/street.jpg')
    await this.bot.sendMessage(this.id, `Вы вышли из дома и находитесь на улице Садовая 1, рядом есть: остановка, магазин Пятерочка, шаурма, или в другой район тогда нужно на остановку:`, 
    this.replyStreet)
  }
  async food() {
    await this.bot.sendPhoto(this.id, './images/shawerma.jpg', this.replyShaverma)
  }
  async shop() {
    await this.bot.sendPhoto(this.id, './images/shop5.jpg', this.replyShop5)
  }
  async stop() {
    await this.bot.sendPhoto(this.id, './images/stop.jpg', this.replyStop)
  }
  async gym() {
    await this.bot.sendPhoto(this.id, './images/gym.jpg', this.replyGym)
  }
}
module.exports = StreetClass