const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "TOKEN", 
prefix: "!" 
})

bot.onMessage()
//commands

bot.command({
name: "ping", 
code: `Pong! \`$ping\`` 
})

bot.command({
name: "trigger", 
code: `code` 
})

//status

bot.status({
  text: "Bot is running!",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "Add as many you need!",
  type: "PLAYING",
  time: 12
})

//variables

bot.variables({
    Name: "Value",
    Name2: "Value2"
  })
