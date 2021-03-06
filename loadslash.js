const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS"
    ]
})

let bot = {
    client
}

const guildId = "667761676061245440"

client.slashcommands = new Discord.Collection()

client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)

client.loadSlashCommands(bot, false)

client.on("ready", async () => {
    const guild = client.guilds.cache.get(guildId)
    if (!guild)
        return console.error("target guild not found")
    
    await guild.commands.set([...client.slashcommands.values()])
    console.log(`successfully loaded ${client.slashcommands.size} slash commands`)
    process.exit(0)
})

module.exports = bot

client.login(process.env.TOKEN)