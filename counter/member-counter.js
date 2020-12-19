module.exports = async (client) =>{
    const guild = client.guilds.cache.get('777104080807919616');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('788304182842490890');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
    }, 5000);
}
