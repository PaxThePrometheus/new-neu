const Discord = require("discord.js");

module.exports = {
    name:'mysexuality',
    description:'tells you your gender',
    execute(message, args){
        function doRandLG() {
            var rand = ['Gay' , 'Transgender' , 'Queer' , 'Lesbian' , 'Homosexual' , 'Pansexual' , 'Demisexual'  , 'undefined' , 'no pp']
            return rand[Math.floor(Math.random()*rand.length)];   
        }
        let embed = new Discord.MessageEmbed()
        .setColor('LUMINOUS_VIVID_PINK')
        .setFooter('Made by Paxx#5039')
        .setTitle('This is your sexuality')
        .setDescription(`**${doRandLG()}**`)
        .setTimestamp(message.setTimestamp)
        message.channel.send(embed);
        
    }

}