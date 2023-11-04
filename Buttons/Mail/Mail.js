const HomeClass = require('../Home/Home')
const {btnsWork, btnsMessages} = require('./MailBtns')
const {btnCheckEmail} = require('../Home/HomeBtns')

class MailClass {
  constructor(bot, id) {
    this.bot = bot
    this.id = id
    this.home = new HomeClass(bot, id)
    this.replyHome = {
      reply_markup: {
        inline_keyboard: btnsMessages
      }
    }
    this.replyWork = {
      reply_markup: {
        inline_keyboard: btnsWork
      }
    }
    this.replyPayed = {
      reply_markup: {
        inline_keyboard: [[btnCheckEmail]]
      }
    }
  }
  async join() {
    await this.bot.sendPhoto(this.id, './images/check_mail.jpg')
    await this.bot.sendMessage(this.id, 
      `Это ваш почтовый ящик, сюда вам будут приходить письма:`, this.replyHome)
  }
  async work() {
    await this.bot.sendMessage(this.id, `Список работ `, this.replyWork)
  }
  async applyJob() {
    await this.home.join()
  }
  async payRoom() {
    await this.bot.sendMessage(this.id, `Вы оплатили жильё`, this.replyPayed)
  }
}
module.exports = MailClass