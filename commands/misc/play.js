var servers = {};

const ytdl = require('ytdl-core')

const Discord = require('discord.js');

const PREFIX = 'neu!';

module.exports = {
    name: 'play',
    description:'plays music',
    async execute(client,message,args) {
        function play(connection, message) {
            var server = servers[message.guild.id];

            server.dispatcher = connection.play(ytdl(server.queue[0], { filter: "audioonly" }));

            server.queue.shift();

            server.dispatcher.on("end", function () {
                if (server.queue[0]) {
                    play(conection, message);
                } else {
                    connection.disconnect();
                }
            })
        }

        if (message.content.startsWith(`${PREFIX}play`)) {
            if (!args[0]) {
                message.channel.send('You need to provide a link');
                return;
            }

            if (!message.member.voice.channel) {
                message.channel.send('You must be connected to a channel')
                return;
            }

            if (!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }

            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if (!message.member.voice.connection) message.member.voice.channel.join().then(function (connection) {
                play(connection, message);

                if (message.content.startsWith(`${PREFIX}stop`)){
                    var server = servers[message.guild.id];
                    if (message.guild.voice.connection) {
                        for (var i = server.queue.length - 1; i >= 0; i--) {
                            server.queue.splice(i, 1);
                        }
        
                        server.dispatcher.end();
                        message.channel.send('Ending the queue. leaving voice channel')
                        console.log('queue stopped')
                    }
                    if (message.guild.voice.connection) message.guild.voice.connection.disconnect();
                }

            })

        }
    }
}