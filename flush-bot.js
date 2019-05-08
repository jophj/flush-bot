setTimeout(() => process.exit(0), 1000)
const Telegraf = require('telegraf')

const bot = new Telegraf(process.argv[2])
bot.on('callback_query', (ctx) => {
	console.log(ctx.callbackQuery)
})
bot.on('message', (ctx) => {
	console.log(ctx.message)
})
bot.launch()

