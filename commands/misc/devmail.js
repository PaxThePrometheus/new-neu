const Discord = require('discord.js');

module.exports = {
    name : 'devmail',
    description : 'sends the dev mails',
        execute(client, message, args){
            const mail = message.content.split(' ').slice(1).join(' ')
            if(message.author.id == "710141690241089669") return message.channel.send("~~===========~~⁣__**REVOKED ACCESS**__⁣~~===========~~ \n \n    You\'re blacklisted from using this command. \n \n **If you think this blacklisting is unjustified, contact the dev**") // poya's id 710141690241089669
            if(!mail) return message.channel.send('Please include a message.').then(message.delete({timeout:5000}))
            client.users.cache.get("388297849206472704").send(`${message.author.tag} : ${mail}`);
            message.channel.send("Dev Mail sent!").then( message.delete({timeout :5000}))
        }
}