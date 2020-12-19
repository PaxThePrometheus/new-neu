const Discord = require('discord.js')

module.exports = {
    name:'pp',
    description:'measures your pp',
    async execute(client,message,args){
        function doRandPP() {
            var rand = ['8===D', '8==========D', '8=D', '8==D', '8======D', '8====D', '8=====D', '8=======D', '8========D', 'LIES, YOU HAVE NO PP'];
            return rand[Math.floor(Math.random() * rand.length)];
        }
        if(!args[1]){
        let embed = new Discord.MessageEmbed()
        .setColor('LUMINOUS_VIVID_PINK')
        .setFooter('Made by Paxx#5039')
        .setTitle(`This is your pp size ${message.author.tag}`)
        .setDescription(doRandPP())
        .setTimestamp()
        message.channel.send(embed);
        } if(args[1]){
            let embed = new Discord.MessageEmbed()
            .setColor('LUMINOUS_VIVID_PINK')
            .setFooter('Made by Paxx#5039')
            .setTitle(`This is your pp size ${message.mentions.tag} `)
            .addfield(doRandPP())
            .setTimestamp()
            message.channel.send(embed);
        }
    } 

    
}