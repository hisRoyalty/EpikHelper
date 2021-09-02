/*
Custom ID Docs:
    delserv = Delete the server. 
*/

const Discord = require("discord.js")
const request = require('request');
const { Intents } = require("discord.js")
const Client = new Discord.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    disableEveryone: true
})
const config = require('./config.json');

Client.on("channelCreate", (channel) => {
        if(channel.parentId === "855143122949767199") {
            const button = new Discord.MessageActionRow()
                .addComponents(
                    new Discord.MessageButton()
                        .setStyle("DANGER")
                        .setLabel("Issue Not Found")
                        .setCustomId("IssueNotFound")
                        )
            const select = new Discord.MessageActionRow()
                .addComponents(
                    new Discord.MessageSelectMenu()
                        .setCustomId("Issue_Selection")
                        .setPlaceholder("Select what best describes your issue.")
                        .addOptions([
                            {
                                label: 'Delete Server',
                                description: 'By Selecting This We Delete Your Server',
                                value: 'Deletes your server, erasing all the data. This is irreversible.',
                                customID : "delserv"
                            }            
                        ]));
            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .addFields(
                    {
                        name : "Welcome!",
                        value : "My name is EpikHost bot and today I'll try to help you!"
                    }, {
                        name : "Please select the issue you have form the Menu Select below, if you're issue isn't there, please select the red button. Thanks :)",
                        value : "Please don't click the red button just for a human without checking if your issue is on the list, this will result in a warn. Thanks. :D"
                    }
                );
                await interaction.reply({embeds : [embed], components : [select,button]});
    }
});
Client.on("interactionCreate", interaction => {
    if(interaction.isButton()) {
        if(interaction.customID === "IssueNotFound") {
            interaction.channel.send({content : "<@&861498615502864395>"});
        };
        if(interaction.isSelectMenu()) { 
            if(interaction.customId === "delserv") {
                request.post("https://pterodactyl.file.properties/api/application/users/8",)
            }
        }}
        }
)
try {
    Client.login(config["token"]);
} catch(e) {
    console.error(`Invalid token: ${e}`);
    process.exit(2);
}
