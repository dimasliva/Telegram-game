const {btnsCook, btnFridge} = require('../Cooking/CookBtns')
const HomeClass = require('../Home/Home')

class CookingClass {
  constructor(bot, id) {
    this.bot = bot
    this.id = id
    this.replyCook = {
      reply_markup: {
        inline_keyboard: btnsCook
      }
    }
    this.home = new HomeClass(bot, id)
  }
  async join() {
    await this.bot.sendPhoto(this.id, './images/cook_join.jpg')
    await this.bot.sendMessage(this.id, `Я на кухне`, this.replyCook)
  }
  async cook() {
    await this.home.join()
  }
  async fridge() {
    await this.home.join()
  }
}
module.exports = CookingClass