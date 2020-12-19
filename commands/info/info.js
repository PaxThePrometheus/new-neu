const Discord = require ('discord.js')

module.exports = {
    name:'info',
    description:'sends information',
    async execute(client, message, args){
        if (args[1] === 'author') {
            message.channel.send('**Bot Created By Paxx#5039**')
        } else if (args[1] === 'server') {
            const SEembed = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name} Info `, message.guild.iconURL())
                .setTitle('**Server Stats**')
                .setColor(0x00FFA)
                .addField("**Server Name** ", message.guild.name, true)
                .addField("**Server Owner** ", message.guild.owner, true)
                .addField("**Member Count** ", message.guild.memberCount, true)
                .addField("**Roles** ", message.guild.roles.cache.size, true)
                .setFooter(`Neu Bot`, client.user.displayAvatarURL())
            message.channel.send(SEembed);
        } else if (args[1] === 'bot') {
            const bembed = new Discord.MessageEmbed()
                .setColor('#00FFA')
                .setTitle("**Bot Info**")
                .setAuthor(`${client.user.username} Info`, client.user.displayAvatarURL())
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription("[Invite me!](https://discord.com/oauth2/authorize?client_id=720135396230561834&scope=bot&permissions=2146958591)")
                .addFields(
                    { name: '**Bot Name**', value: 'Neu Bot' },
                    { name: '\u200B', value: '\u200B' },
                    { name: '**Guild Count **', value: `${client.guilds.cache.size}`, inline: true },
                    { name: '**User Count **', value: `${client.users.cache.size}`, inline: true },
                    { name: '**Node.js Version **', value: '**14.4.0**', inline: true },
                    { name: '**Discord.js Version **', value: '**12.2.0**', inline: true },
                    { name: '**Bot Language **', value: 'Discord.js', inline: true },
                    { name: '**Bot Version **', value: '**1.0.0**', inline: true },
                    { name: '\u200b', value: '\u200b' },
                    { name: '**Other Information **', value: '**Neu Bot - Pronounced as "New Bot"**', inline: true },
                    { name: '\u200b', value: '\u200b' },
                    { name: '**Bot Developer **', value: "[**Paxx#5039**]()", inline: true },
                    { name: '**People who helped **', value: 'BearXplode and WitheredToast', inline: true },
                    { name: '\u200b', value: '\u200b' },
                )
            bembed.addField("Invite me!", "[Here!](https://discord.com/oauth2/authorize?client_id=720135396230561834&scope=bot&permissions=2146958591)")
                .setTimestamp()
                .setFooter('Neu Bot', client.user.displayAvatarURL())
            message.channel.send(bembed);

        } else if (args[1] === 'version') {
            message.channel.send('Bot Version : **1.0.0**');
        } else {
            Iembed = new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setTitle('Command Misuse')
                .setDescription('Correct way to use neu!info')
                .setThumbnail(client.user.displayAvatarURL())
                .addFields(
                    { name: '**You need to type a specific option**', value: '\u200b' },
                    { name: '\u200b', value: '\u200b' },
                    { name: '**Proper Args**', value: '**author** - Tells you who made the bot \n **bot** - Tells you some bot info \n**server** - Tells you some info about the server' }
                )
            message.channel.send(Iembed);
        }
    }
}