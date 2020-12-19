const Discord = require('discord.js');

module.exports = {
    name: 'iq',
    description: 'Tells you your iq',
    execute(client, message, args){
        let embed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setFooter('Made by Paxx#5039')
        .setTitle('This is your IQ.')
        .setDescription("Your iq is " + Math.floor(Math.random() * 149 + 1 ) + "!")
        .setTimestamp()
        message.channel.send(embed);
    }    
}