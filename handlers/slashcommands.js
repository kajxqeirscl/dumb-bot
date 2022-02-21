const fs = require("fs")

const getfiles = (path, ending) => {
    return fs.readdirSync(path).filter(f => f.endsWith(ending))
}

module.exports = (bot, reload) => {
    const { client } = bot

    let slashcommands = getfiles("./slashcommands/", ".js")

    if (slashcommands.length === 0)
        console.log("no slashcommands loaded")

    slashcommands.forEach(f => {
        if (reload) delete require.cache[require.resolve(`../slashcommands/${f}`)]
        const slashcmd = require(`../slashcommands/${f}`)
        client.slashcommands.set(slashcmd.name, slashcmd)

    })
}