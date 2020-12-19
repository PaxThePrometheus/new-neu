const Discord = require('discord.js')

module.exports = {
    name:'embed',
    description:'makes an embed',
    async execute(client,message,args){
        const Membed = new Discord.MessageEmbed()
        .setTitle(message.author.tag)
        .setDescription(message.content.split(' ').slice(1).join(' '))
    message.channel.send(Membed)
    message.delete()
    }
}