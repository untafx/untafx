const Discord = require('discord.js');

const client = new Discord.Client();

message.channel.send({embed: {
  color: 3447003,
  description: "A very simple Embed!"
}});

 

client.on('ready', () => {

    console.log('I am ready!');
    
});

 

client.on('message', message => {

    if (message.content === '//news') {

       message.reply('tayo hehe');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
