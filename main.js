const Discord = require('discord.js');

const client = new Discord.Client();

const memberCount = require('./counter/member-counter.js');

const config = require('./config/config.json');

const PREFIX = config.PREFIX

var servers = {};

const fs = require('fs');
const { openStdin } = require('process');
const { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } = require('constants');
client.commands = new Discord.Collection();

const admin = fs.readdirSync('./commands/admin').filter(file => file.endsWith('.js'));
for (const file of admin) {
    const command = require(`./commands/admin/${file}`);

    client.commands.set(command.name, command);
}
const fun = fs.readdirSync('./commands/fun').filter(file => file.endsWith('.js'));
for (const file of fun) {
    const command = require(`./commands/fun/${file}`);
    console.log(`${command.name} ready!`)
    client.commands.set(command.name, command);
}
const info = fs.readdirSync('./commands/info').filter(file => file.endsWith('.js'));
for (const file of info) {
    const command = require(`./commands/info/${file}`);
    console.log(`${command.name} ready!`)
    client.commands.set(command.name, command);
}
const misc = fs.readdirSync('./commands/misc').filter(file => file.endsWith('.js'));
for (const file of misc) {
    const command = require(`./commands/misc/${file}`);
    console.log(`${command.name} ready!`)
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Neu Bot is online!');
    memberCount(client)
    client.user.setActivity(`type 'hey neu' to get prefix | Watching ${client.guilds.cache.size} guilds!`);
    console.log(`Online on ${client.guilds.cache.size} servers!`)
})

client.on('message', async message => {

    const ownerOnly = (message.author.id == "388297849206472704")

    let args = message.content.substring(PREFIX.length).split(" ");

    try{

        var botLatency;
        function botDelay() {
            botLatency = setTimeout(latencyAlert, `${message.client.ws.ping}` + 0);
            }
            function latencyAlert() {
                message.channel.send(`took bot ${message.client.ws.ping}ms to respond`)
        }

    if(message.content == 'hey neu') {
        message.channel.send("My prefix for this server is ``neu!``")

        message.channel.send(botDelay())
    }

    switch (args[0]) {
        case 'ping':
            message.channel.send(`Pong !🏓`).then((sentMessage) => sentMessage.edit(`Pong !🏓\n Took bot **\`\`${message.client.ws.ping}\`\`ms** to respond.\nAPI Latency`))
            break;
        case 'help':
            if (message.content.startsWith(`${PREFIX}help`)){
                client.commands.get('help').execute(client, message, args)
            }
            break;
        case 'info':
            if(message.content.startsWith(`${PREFIX}info`)){
                client.commands.get('info').execute(client, message, args)
            }
            break;
        case 'clear':
            if (!message.member.hasPermission("DELETE_MESSAGES", explicit = true))
                return message.channel.send("You dont have permissions to execute this command :P")
            if (message.content.startsWith(`${PREFIX}clear`)) {
                if (!args[1]) return message.reply('Error missing args')
                message.channel.bulkDelete(args[1]);
            }
            break;
        case 'whoami':
            const embed = new Discord.MessageEmbed()
                .setTitle('Who am i?')
                .addField('**Your name is**', message.author.username)
                .addField('**Your discord tag is**', message.author.tag)
                .addField('**Youre a member of**', message.guild.name)
                .setColor(0x00FFA)
                .setThumbnail(message.author.displayAvatarURL())
            message.channel.send(embed);
            break;
        case 'iq':
            if (message.content.startsWith(`${PREFIX}iq`)) {
                client.commands.get('iq').execute(client, message, args);
            }
            break;
        case 'braincell':
            if (message.content.startsWith(`${PREFIX}braincell`)) {
                client.commands.get('braincell').execute(message, args);
            }
            break;
        case 'avatar':
            const aembed = new Discord.MessageEmbed()
                .setImage(message.author.displayAvatarURL())
                .setTitle('**Your avatar!**')
            message.channel.send(aembed);
            break;
        // coin flip system //
        case 'coinflip':
            {
                function doRandCF() {
                    var rand = ['HEADS', 'TAILS'];
                    return rand[Math.floor(Math.random() * rand.length)];
                }
                message.channel.send("**Flipped a coin**, It landed\n...")
                var randomcf;
    function DelayedMessage() {
        randomcf = setTimeout(alertFunc, 1500);
        }
        function alertFunc() {
            message.channel.send(`**${doRandCF()}**`)
    }
                message.channel.send(DelayedMessage());
                break;
            };
        case 'mysexuality':
            if (message.content.startsWith(`${PREFIX}mysexuality`)) {
                client.commands.get('mysexuality').execute(message, args);
            }
            break;
        case 'simprate':
            if (message.content.startsWith(`${PREFIX}simprate`)) {
                client.commands.get('simprate').execute(message, args);
            }
            break;

        case 'pp':
            if(message.content.startsWith(`${PREFIX}pp`)){
                client.commands.get('pp').execute(client,message,args);
            }
            break;
        case 'mock':
            if (message.content.startsWith(`${PREFIX}mock`)) {
                client.commands.get('mock').execute(client,message,args);
            }
            break;
        case 'kick':
            if (message.content.startsWith(`${PREFIX}kick`)) {
                if (!message.member.hasPermission("KICK_MEMBERS", explicit = true))
                    return message.channel.send("You dont have permissions to execute this command :P")
                client.commands.get('kick').execute(message, args);
            }
            break;
        case 'ban':
            if (message.content.startsWith(`${PREFIX}ban`)) {
                if (!message.member.hasPermission("BAN_MEMBERS", explicit = true))
                    return message.channel.send("You dont have permissions to execute this command :P")
                client.commands.get('ban').execute(message, args);
            }
            break;
        case 'gayrate':
            if (message.content.startsWith(`${PREFIX}gayrate`)) {
                client.commands.get('gayrate').execute(message, args);
            }
            break;
        case 'embed':
            if (message.content.startsWith(`${PREFIX}embed`)) {
                client.commands.get('embed').execute(client,message,args);
            }
            break;
        case 'mydeath':
            if (message.content.startsWith(`${PREFIX}mydeath`)) {
                client.commands.get('mydeath').execute(message, args);
            }
            break;
        case 'play':
            if(message.content.startsWith(`${PREFIX}play`)){
                client.commands.get('play').execute(client,message,args);
            }
            break;
        case 'skip':
            var server = servers[message.guild.id];
            if (server.dispatcher) server.dispatcher.end();
            message.channel.send('Song Skipped');
            break;
        case 'image':
            if(message.content.startsWith(`${PREFIX}image`)){
                client.commands.get('image').execute(client,message,args)
            }
            break;
        case 'guilds':
            message.channel.send('Watching ' + client.guilds.cache.size + ' Guilds/Servers!');
            break;
        case 'search':
            if(message.content.startsWith(`${PREFIX}search`)){
                client.commands.get('search').execute(client, message, args)
            }

            break;
        case 'balance':
            if (message.content.startsWith(`${PREFIX}balance`)) {
                client.commands.get('balance').execute(client, message, args);
            }
            break;
        case 'devmail':
            if(message.content.startsWith(`${PREFIX}devmail`)){
                client.commands.get('devmail').execute(client, message, args);
        break;
            }
        case 'eval':
            if (message.content.startsWith(`${PREFIX}eval`)){
                if(!ownerOnly) return message.channel.send('This command is only for the Developer');
                var result = message.content.split(" ").slice(1).join(" ")
                if (message.content.split(" ").slice(1).join(" ") == 'process.exit()') { return message.channel.send('Access Denied') }
                    let evaled = eval(result);
                    message.channel.send(`\`\`\`js\n${result}\`\`\``)
                    console.log(result);
            }
        break;
    }
} catch (err){
    message.reply('caught an error!')  
    console.log(err);
    message.channel.send(err);
} 
    
    if (message.content.startsWith(`${PREFIX}quickmaffs`)) {
        client.commands.get('quickmaffs').execute(message, args)
    }
    if (message.content.startsWith(`${PREFIX}randomnumber`)) {
        message.channel.send(`Your random number is! ${Math.floor(Math.random() * 700 + 1)}`)
        }
    if (message.content.startsWith(`${PREFIX}urban`)){
        client.commands.get('urban').execute(message, args);
    }
    if (message.content.startsWith(`${PREFIX}roast`)){
        client.commands.get('roast').execute(message,args);
    }

    if (message.content.startsWith(`${PREFIX}calc`)){
        client.commands.get('calc').execute(client, message, args);
    }
})

client.login(config.TOKEN);
