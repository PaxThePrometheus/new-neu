module.exports = {
    name: 'braincell',
    aliases: ["braincell", "smorttest"],
    description: 'Tells you how many braincells you have',
    execute(client, message, args) {
        const user = message.mentions.users.first();
        if (!args[1]) {
            message.channel.send("You have " + Math.floor(Math.random() * 86000000000 + 1) + " braincells!");
        } if(args[1])
            message.channel.send(`${user}` + " has " + Math.floor(Math.random() * 86000000000 + 1) + " braincells!")
        ;
    }
}