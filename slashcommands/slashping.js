const run = async (client, interaction) => {
    try {
        const mesg = await interaction.reply({content: "pong", fetchReply: true});

        await interaction.editReply({content: `pong \`${mesg.createdTimestamp - interaction.createdTimestamp} ms\``})
    } catch (err) {
        console.log("error => ",err)
    }

}

module.exports = {
    name: "ping",
    description: "ping pong",
    type: "CHAT_INPUT",
    run: run
}