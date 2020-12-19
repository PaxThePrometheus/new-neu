module.exports = {
    name : 'quickmaffs',
    description: 'quick maffs bruh',
    async execute(message, args){
        function AyeMath() {
            if(!args[1]){
                message.channel.send('You have to type a mathematical equation.')
            }
                if(args[1]){
            var rand = ['Do i look like a fucking mathematician?', 'Calculate it yourself nerdd', `Bruh are you that dumb? the answer is simply ${Math.floor(Math.random() * 100 + 1)} `, 'I just got off work, ill help you later.', 'Cant you see im busy? do it yourself']
            return rand[Math.floor(Math.random() * rand.length)];
        }}
        message.channel.send(AyeMath());
    }
}