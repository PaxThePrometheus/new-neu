module.exports = {
    name: 'testing',
    description: 'testing command',
    utilisation: '{PREFIX}testing',
    execute(message){
        message.channel.send('lul testicle')
    }
}