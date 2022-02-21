const run = async (client, interaction) => {
    try {
        const mesg = await interaction.reply({content: "pong"});

        await interaction.editReply({content: `pong \`${mesg.created.Timestamp - interaction.created.Timestamp}\``})
    } catch (err) {
        consloe.log("error => ",err)
    }

}

module.exports = {
    name: "ping",
    description: "ping pong",
    type: "CHAT_INPUT"
}