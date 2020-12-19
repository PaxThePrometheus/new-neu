module.exports = {
    name: 'gayrate',
    description: 'Tells you how gay you are',
    execute(message, args){
        if(!args[1]){
        message.channel.send("You are **" + Math.floor(Math.random() * 99 + 1 ) + "%** gay!");}
        if(args[1]){
            message.channel.send(`${message.mentions.users.first()} is **${Math.floor(Math.random() * 102 + 1)}%** gay!`)
        } 
        
        
    }    
}