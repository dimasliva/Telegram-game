const {btnsHome} = require('./HomeBtns')

class HomeClass {
  constructor(bot, id) {
    this.bot = bot
    this.id = id
    this.replyHome = {
      reply_markup: {
        inline_keyboard: btnsHome,
        hide_keyboard: true
      }
    }
  }
  async join() {
    await this.bot.sendPhoto(this.id, './images/room.jpeg')
    await this.bot.sendMessage(this.id, `Я дома`, this.replyHome)
  }
  async start() {
    await this.bot.sendPhoto(this.id, './images/room.jpeg')
    await this.bot.sendMessage(this.id, `Вы в доме: \n Перед вами кровать, дверь в ванную больше: `, this.replyHome)
  }

}
module.exports = HomeClass