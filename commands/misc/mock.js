module.exports = {
    name:'mock',
    description:'mocks what u say',
    async execute(client,message,args){
        if (message.author.id == "710141690241089669") return message.channel.send('Access Denied');
        var text = message.content.split(' ').slice(1).join(' ')
        if (!text) return message.channel.send('You need to type a message')
        message.channel.send(text)
        message.delete()
    }
}