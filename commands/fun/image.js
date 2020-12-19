const cheerio = require('cheerio');

const request = require('request');
module.exports = {
    name:'image',
    description:'sends an image of your choice',
    async execute(client,message,args){
        if (args[1] == "boobs","tits","porn","bdsm","blowjob","dogs"){ message.channel.send("Please use the nsfw command substitutes.") 
    } 

        const resulta = args.join('+');
        const options = {
            url: `http://results.dogpile.com/serp?qc=images&q=${resulta}`,
            method: 'GET',
            headers: {
                'Accept': 'text/html',
                'User-Agent': 'Chrome'
            }
        };

        request(options, (error, response, responseBody) => {
            if (error) {
                console.log(error);
            }


            const $ = cheerio.load(responseBody);


            const links = $('.image a.link');

            const urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr('href'));

            if (!urls.length) return;

            message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
        });
    }
}