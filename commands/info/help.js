
const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description:'gives an array of commands',
    async execute(client, message, args) {
        const sembed = new Discord.MessageEmbed()
        .setColor(0x00FFA)
        .setTitle("<a:neu:788422688741392405> Server Commands <a:neu:788422688741392405>")
        .addFields(
            { name: "**Essential Commands**", value: "**neu!help**: Shows An embedded guide \n **neu!whoami**: tells you your information \n **neu!ping**: says the ping of the bot \n **neu!mock**: Mocks words you say \n **neu!info**: shows information of a specific arg \n **neu!avatar**: shows you your avatar \n **neu!embed**: makes an embedded message", inline: true },
            { name: "**Admin Commands**", value: "**neu!clear**: Clears messages on chat \n **neu!kick**: kicks players out of the server \n **neu!ban**: Bans player from the server \n **neu!warn**: Gives a member a warn"},
            { name: "**Fun Commands**", value: "**neu!iq**: Tells you your iq \n **neu!braincell**: Tells you how many braincells you have \n **neu!simprate**: Tells you how much of a simp you are \n **neu!gayrate**: tells you how gay you are \n **neu!mysexuality**: Tells you your sexuality ps. its a joke \n **neu!coinflip**: Neu flips a coin through technology! \n **neu!pp**: Tells you your pp size \n **neu!mydeath**: tells you how you die", inline: true },
            { name: "**Info**", value: "**neu!info**: shows info of a specific arg \n **Args:** \n **neu!info author** shows the name of his creator \n **neu!info server** shows server info \n **neu!info bot** shows bot info"},
            { name: "**Music Commands**", value: "**NOTE**:\n Music commands may be\n a little buggy since its\n under development \n **neu!play**: plays music \n **neu!skip**: skips queued songs \n **neu!stop**: stops the queue", inline: true },
            { name: "\u200b", value: "\u200b" },
            { name: "\u200b", value: "\u200b" },
            { name: "These are the only commands the nub dev has given for now", value: "**Enjoy your stay!**" }
        )
        .setThumbnail(client.user.displayAvatarURL())
    message.channel.send(sembed);
    }
}