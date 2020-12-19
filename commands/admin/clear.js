module.exports = {
    name: 'clear',
    description: 'clears chat',
    execute(client, message, args){
        if(!args[1]) return message.reply('Error missing args')
        message.channel.bulkDelete(args[1]);
        message.delete()
     }   
}
